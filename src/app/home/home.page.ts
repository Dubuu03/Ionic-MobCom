import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',  
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  slidesPerView: number = 1.1;  // Default value for larger screens

  constructor() {}

  ngOnInit() {
    this.updateSlidesPerView(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {  // Use Event instead of ResizeEvent
    this.updateSlidesPerView();
  }

  // Method to dynamically change the slidesPerView based on window width
  updateSlidesPerView() {
    if (window.innerWidth >= 768) {
      this.slidesPerView = 2.1; 
    }else if (window.innerWidth >= 520) {
      this.slidesPerView = 1.4;
    }
    else if (window.innerWidth >= 650) {
      this.slidesPerView = 1.8;
    }else {
      this.slidesPerView = 1.1;  
    }
  }
}
