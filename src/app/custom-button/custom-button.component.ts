import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import IonicModule for IonButton
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]  
})
export class CustomButtonComponent implements OnInit {

  @Input() text: string = 'Button';  
  @Input() customClass: string = ''; 

  constructor() {}

  ngOnInit() {}
}
