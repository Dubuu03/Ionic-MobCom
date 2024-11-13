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
showConfirmPassword: boolean = false;

togglePasswordVisibility(field: string) {
  const passwordField = document.querySelector(`#${field}`) as HTMLInputElement;

  if (field === 'password') {
    this.showPassword = !this.showPassword;
    passwordField.type = this.showPassword ? 'text' : 'password';
  } else if (field === 'confirmPassword') {
    this.showConfirmPassword = !this.showConfirmPassword;
    passwordField.type = this.showConfirmPassword ? 'text' : 'password';
  }
}

}
