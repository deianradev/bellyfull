import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [NgxAuthFirebaseUIModule.forRoot({
    apiKey: 'AIzaSyD1DB06aPKlpPrAkh4pnY_fCCpIwj79pqM',
    authDomain: 'bellyfull-631b3.firebaseapp.com',
    databaseURL: 'https://bellyfull-631b3.firebaseio.com',
    projectId: 'bellyfull-631b3',
    storageBucket: 'bellyfull-631b3.appspot.com',
    messagingSenderId: '440145801624',
    appId: '1:440145801624:web:b75667eadc8527912ffbed',
    measurementId: 'G-33H17HRXH4'
  }),

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
