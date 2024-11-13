import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CustomButtonComponent } from '../custom-button/custom-button.component';  // Import CustomButtonComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    CustomButtonComponent  // Add CustomButtonComponent 
  ],
  declarations: [LoginPage] 
})
export class LoginPageModule {}
