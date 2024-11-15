import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', // Route for the home page
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', // Redirect the default route
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login', // Route for login page
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup', // Route for signup page
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Preload all modules for faster navigation
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
