import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppCommonModule } from './common/app-common.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA53fIL1fuSS-E4Pbj95HdkQIGxZfhwfHw',
      authDomain: 'ntl-group-nam-linh-chi-do.firebaseapp.com',
      databaseURL: 'https://ntl-group-nam-linh-chi-do.firebaseio.com',
      projectId: 'ntl-group-nam-linh-chi-do',
      storageBucket: 'ntl-group-nam-linh-chi-do.appspot.com',
      messagingSenderId: '108955594460'
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
