import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';


const firebaseConfig = {
  apiKey: "AIzaSyCG20bQkpF_BE50ihsJXTVdxVETQe1Se9s",
  authDomain: "meptrix-image-storage.firebaseapp.com",
  projectId: "meptrix-image-storage",
  storageBucket: "meptrix-image-storage.appspot.com",
  messagingSenderId: "419197271332",
  appId: "1:419197271332:web:e30540b6536709f3c7c7b1"
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()),]
};
