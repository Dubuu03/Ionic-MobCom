import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {
  currentSlideIndex = 0;

  onSwiper(swiper: any) {
  }

  onSlideChange(event: any) {
    this.currentSlideIndex = event.activeIndex;
  }

  skip() {
    window.location.href = '/onboarding-2'; 
  }

  goToGetStarted() {
    window.location.href = '/onboarding-2'; 
  }
}
