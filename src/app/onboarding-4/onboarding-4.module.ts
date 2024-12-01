import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Onboarding4PageRoutingModule } from './onboarding-4-routing.module';
import { Onboarding4Page } from './onboarding-4.page';

import { CustomButtonComponent } from '../custom-button/custom-button.component'; 



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboarding4PageRoutingModule,
    CustomButtonComponent 
  ],
  declarations: [Onboarding4Page]
})
export class Onboarding4PageModule {}
