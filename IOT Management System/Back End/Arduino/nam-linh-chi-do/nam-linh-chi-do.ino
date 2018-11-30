#include <ESP8266WiFi.h>
#include "DHT.h"
#include <FirebaseArduino.h>

const char* ssid     = "Phuc Thanh IT";
const char* password = "123456@@@";

#define DHTTYPE DHT11
#define DHTPIN D1

#define FIREBASE_HOST "ntl-group-nam-linh-chi-do.firebaseio.com"
#define FIREBASE_AUTH "4oGGdqYpGc0bfH8sNTxaJA0heN1PVG6bmoObZ4k1"

#define RELAYPIN 2

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
  }
  configTime(7 * 3600, 0, "pool.ntp.org", "time.nist.gov");
  while (!time(nullptr)) {
    delay(1000);
  }

  dht.begin();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  delay(1000);

  time_t now = time(nullptr);
  String dateTime = ctime(&now);

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (isnan(dateTime)) {
    return;
  } else {
    dateTime.replace("\n", "");
    Firebase.setString("sensors/0/updated", dateTime);
    Firebase.setString("devices/0/updated", dateTime);
  }

  if (isnan(humidity) || isnan(temperature)) {
    Firebase.setString("sensors/0/status", "Inactive");
    return;
  } else {
    Firebase.setFloat("sensors/0/data/humidity", humidity);
    Firebase.setFloat("sensors/0/data/temperature", temperature);
    Firebase.setString("sensors/0/status", "Active");
    if (humidity < 80 || temperature > 30) {
      digitalWrite(RELAYPIN, HIGH);
      Firebase.setString("devices/0/power", "On");
    } else {
      digitalWrite(RELAYPIN, LOW);
      Firebase.setString("devices/0/power", "Off");
    }
  }
}
