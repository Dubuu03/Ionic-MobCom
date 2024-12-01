import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Options for ion-slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.5, // Adjust as needed for your layout
    spaceBetween: 10, // Adjust space between slides
    centeredSlides: true,
    loop: true,
  };

  // Sample best sellers products (replace with actual data)
  bestSellers = [
    {
      ratingIconUrl: 'assets/images/star.png',
      rating: 4.5,
      title: 'Strawberry Blush Frost',
      price: 1000,
      productImageUrl: 'assets/images/strawberry.png',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      ratingIconUrl: 'assets/images/star.png',
      rating: 4.2,
      title: 'Blueberry Delight',
      price: 950,
      productImageUrl: 'assets/images/blueberry.png',
      favorite: false,
      productId: 124,
      productPath: '/product-details/124'
    },
    // Add more products here
  ];

  constructor() {}

}
