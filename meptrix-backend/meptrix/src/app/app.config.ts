import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


const firebaseConfig = {
  apiKey: "AIzaSyCG20bQkpF_BE50ihsJXTVdxVETQe1Se9s",
  authDomain: "meptrix-image-storage.firebaseapp.com",
  projectId: "meptrix-image-storage",
  storageBucket: "meptrix-image-storage.appspot.com",
  messagingSenderId: "419197271332",
  appId: "1:419197271332:web:e30540b6536709f3c7c7b1"
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideToastr(), provideAnimations(), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"meptrix-angular","appId":"1:650530647978:web:826a37d96f65af8c1385d3","databaseURL":"https://meptrix-angular-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"meptrix-angular.appspot.com","apiKey":"AIzaSyBWnMsVX3l5XkNIDMgWbEoGleaPQZ2ku34","authDomain":"meptrix-angular.firebaseapp.com","messagingSenderId":"650530647978","measurementId":"G-0BZ8C40MH1"}))), importProvidersFrom(provideStorage(() => getStorage())),]
};
