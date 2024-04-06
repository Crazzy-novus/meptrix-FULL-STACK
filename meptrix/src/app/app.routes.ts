import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { Component } from '@angular/core';

import { HomeComponent } from './component/home/home.component';
import { homedir } from 'os';
import { profile } from 'console';
import { ProfileComponent } from './component/userprofile/profile/profile.component';
import { ClubDescriptionComponent } from './component/club-description/club-description/club-description.component';
import { ClublistComponent } from './component/clublist-page/clublist/clublist.component';
import { MainComponent } from './component/dashboard/main/main.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotPasswordComponent } from './component/credentials/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './component/credentials/resetpassword/resetpassword.component';
import { EventcreationComponent } from './component/eventcreation/eventcreation.component';
import { ContestcreationComponent } from './component/contestcreation/contestcreation.component';
import { AddclubComponent } from './component/admin/addclub/addclub.component';
import { AdmintableComponent } from './component/admintable/admintable.component';


export const routes: Routes = [

  {
    'path': '', redirectTo: 'register', pathMatch: 'full', title: 'UserRegistration'
  },
 /* {
    'path': '', redirectTo: 'home', pathMatch: 'full', title: 'Langing Page'
  },
  */
  {
    'path': 'register', component: RegistrationComponent, title: 'UserRegister'
  },
  {
    'path': 'admintable', component: AdmintableComponent, title: 'Admintable'
  },
  {
    'path': 'eventcreate', component: EventcreationComponent, title: 'EventCreate'
  },
  {
    'path': 'contestcreate', component: ContestcreationComponent, title: 'ContestCreate'
  },
  {
    'path': 'admin', component: AdmintableComponent, title: 'AdminTable'
  },

  {
    'path': 'login', component: LoginComponent, title: 'Log-in page'
  },
  {
    'path': 'home', component: HomeComponent, title: 'Landing Page'
  },
  {
    'path': 'dashboard', component: MainComponent, title: 'Dash Board'
  },
  {
    'path': 'profile', component: ProfileComponent, title: 'User Profile'
  },
  {
    'path': 'forgotpassword', component: ForgotPasswordComponent, title: 'Forgot Password'
  },
  {
    'path':'resetpassword/:token', component: ResetpasswordComponent, title: 'Reset Password'
  },
  {
    'path': 'club', component: ClubDescriptionComponent, title: 'Description'
  },
  {
    'path': 'clublist', component: ClublistComponent, title: 'Club List'
  },
  {
    'path': 'addclub', component: AddclubComponent, title: 'Add Club'
  }

/*
  {
    'path': '', component: HomeComponent,
    children: [
      {
        'path': 'home', component: HomeComponent
      }
    ]
  },*/

];
