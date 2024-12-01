import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: {
    ratingIconUrl: string;
    rating: number;
    title: string;
    price: number;
    productImageUrl: string;
    favorite?: boolean;
    productId: number;  // Add productId
    productPath: string; // Add productPath for routing
  };

  constructor(private router: Router) {
    this.product = {
      ratingIconUrl: '',
      rating: 0,
      title: '',
      price: 0,
      productImageUrl: '',
      favorite: false,
      productId: 0,
      productPath: '' 
    };
  }

  // Method to toggle the favorite status
  toggleFavorite() {
    this.product.favorite = !this.product.favorite;
  }

  goToProductDetail() {
    this.router.navigate([this.product.productPath]);
  }
}
