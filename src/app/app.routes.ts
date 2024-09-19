import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile Page',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'Sign In Page',
  },
];
