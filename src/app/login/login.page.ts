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

  isModalVisible: boolean = false;
  platform: string = '';
  platformLogo: string = '';
  platformColor: string = '';

  openModal(platform: string) {
    this.platform = platform;
    const platformData = this.getPlatformLogoAndColor(platform);
    this.platformLogo = platformData.logo;
    this.platformColor = platformData.color;
    this.isModalVisible = true;
  }

  dismissModal() {
    this.isModalVisible = false;
  }

  proceed() {
    console.log(`Proceeding with ${this.platform} sign-in.`);
    this.dismissModal();
  }

  getPlatformLogoAndColor(platform: string): { logo: string, color: string } {
    switch(platform) {
      case 'facebook.com':
        return { logo: 'logo-facebook', color: '#3b5998' };
      case 'instagram.com':
        return { logo: 'logo-instagram', color: '#e1306c' };
      case 'google.com':
        return { logo: 'logo-google', color: '#db4437' };
      default:
        return { logo: '', color: '' };
    }
  }
}
