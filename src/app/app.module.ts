import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareService } from './providers/share.service';
import { FireService, FirelibraryModule } from './modules/firelibrary/core';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { OntueHeaderComponentModule } from './sites/ontue/components/ontue-header/ontue-header.module';
import { KatalkEnglishHeaderComponentModule } from './sites/katalkenglish/components/katalkenglish-header/katalkenglish-header.module';
firebase.initializeApp({
  apiKey: 'AIzaSyBEv8lzyUI6kB8RyxG8xKnzv4WA6KfS6e4',
  authDomain: 'ontue-client-sites.firebaseapp.com',
  databaseURL: 'https://ontue-client-sites.firebaseio.com',
  projectId: 'ontue-client-sites',
  storageBucket: 'ontue-client-sites.appspot.com',
  messagingSenderId: '328021421807'
});

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FirelibraryModule.forRoot({ functions: true }),
    OntueHeaderComponentModule,
    KatalkEnglishHeaderComponentModule
  ],
  providers: [
    ShareService,
    FireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
