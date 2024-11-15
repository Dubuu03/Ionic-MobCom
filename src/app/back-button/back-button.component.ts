import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  standalone: true,
  imports: [IonicModule]  // Import IonicModule for Ion components
})
export class BackButtonComponent {

  constructor(private router: Router) { }  // Inject the Router service

  // Method to navigate to the Home page
  goBack() {
    this.router.navigate(['/home']);  // This will navigate to the Home page
  }
}
