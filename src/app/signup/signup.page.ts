import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showPassword: boolean = false; 
  showConfirmPassword = false;

  togglePasswordVisibility(field: string) {
    const passwordField = document.querySelector(`#${field}`) as HTMLIonTextareaElement;
    const input = passwordField.shadowRoot?.querySelector('input');

    if (field === 'password') {
      if (this.showPassword) {
        input?.setAttribute('type', 'text');
      } else {
        input?.setAttribute('type', 'password');
      }
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      if (this.showConfirmPassword) {
        input?.setAttribute('type', 'text');
      } else {
        input?.setAttribute('type', 'password');
      }
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
}
