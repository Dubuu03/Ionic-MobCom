import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  standalone: true,
  imports: [IonicModule]  
})
export class BackButtonComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back(); 
  }
}
