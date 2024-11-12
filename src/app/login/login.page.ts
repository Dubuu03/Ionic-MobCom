import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showPassword: boolean = false; 
 togglePasswordVisibility() {
    const passwordField = document.querySelector('#password') as HTMLIonTextareaElement;
    const input = passwordField.shadowRoot?.querySelector('input');

    if (this.showPassword) {
      input?.setAttribute('type', 'text'); 
    } else {
      input?.setAttribute('type', 'password'); 
    }
    
    this.showPassword = !this.showPassword; 
  }
}
