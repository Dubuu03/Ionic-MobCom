import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: true,
  imports: [NgClass, IonicModule]
})
export class CustomButtonComponent implements OnInit {
  @Input() text: string = 'Button';
  @Input() customClass: string = '';

  constructor() {}

  ngOnInit() {}
}
