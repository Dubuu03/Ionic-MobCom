import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

import { CustomButtonComponent } from '../custom-button/custom-button.component'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    CustomButtonComponent // Adding the custom button component here  
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
