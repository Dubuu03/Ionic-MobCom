import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',  
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Array<any> = [];
  
  slidesPerView: number = 2.2;  // Default value for larger screens

  bestSellerProducts = [
    {
      rating: 4.5,
      title: 'Strawberry Blush Frost',
      price: 120,
      productImageUrl: 'assets/images/Non-Coffee/Strawberry Blush Frost.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      rating: 4.3,
      title: 'Lavender Green Chill',
      price: 125,
      productImageUrl: 'assets/images/Non-Coffee/Lavander Green Chill.PNG',
      favorite: false,
      productId: 124,
      productPath: '/product-details/124'
    },
    {
      rating: 4.5,
      title: 'Choco Deja Puff',
      price: 135,
      productImageUrl: 'assets/images/Pastry/Choco Deja Puff.PNG',
      favorite: false,
      productId: 125,
      productPath: '/product-details/125'
    },
    {
      rating: 4.4,
      title: 'Caramel Kiss',
      price: 100,
      productImageUrl: 'assets/images/Hot/Coco-caramel Kiss.PNG',
      favorite: false,
      productId: 126,
      productPath: '/product-details/126'
    }
  ];

  hotProducts = [
  {
    rating: 4.5,
    title: 'Black Stallion',
    price: 120,
    productImageUrl: 'assets/images/Hot/Black Stallion Roast.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.3,
    title: 'Creamy Cloud',
    price: 125,
    productImageUrl: 'assets/images/Hot/Creamy Cloud Mocha.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.5,
    title: 'White Wonder',
    price: 135,
    productImageUrl: 'assets/images/Hot/White Wonder Mocha.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.4,
    title: 'Toffee Twist',
    price: 100,
    productImageUrl: 'assets/images/Hot/Toffee Twist Brew.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.5,
    title: 'Caramel Delight',
    price: 105,
    productImageUrl: 'assets/images/Hot/Caramel Fudge Delight.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.7,
    title: 'Black Noir',
    price: 130,
    productImageUrl: 'assets/images/Hot/Black Noir.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  }
  ];

  coldProducts = [
  {
    rating: 4.5,
    title: 'Herbal Frost',
    price: 120,
    productImageUrl: 'assets/images/Cold/Herbal Frost.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.3,
    title: 'Marble Ice',
    price: 125,
    productImageUrl: 'assets/images/Cold/Marble Ice.PNG',
    favorite: false,
    productId: 124,
    productPath: '/product-details/124'
  },
  {
    rating: 4.5,
    title: 'Vanilla Bean Brew',
    price: 135,
    productImageUrl: 'assets/images/Cold/Vanilla Bean Brew.PNG',
    favorite: false,
    productId: 125,
    productPath: '/product-details/125'
  },
  {
    rating: 4.4,
    title: 'Silk Brew',
    price: 100,
    productImageUrl: 'assets/images/Cold/Silk Brew.PNG',
    favorite: false,
    productId: 126,
    productPath: '/product-details/126'
  },
  {
    rating: 4.5,
    title: 'Golden Cascad',
    price: 105,
    productImageUrl: 'assets/images/Cold/Golden Cascad.PNG',
    favorite: false,
    productId: 127,
    productPath: '/product-details/127'
  },
  {
    rating: 4.7,
    title: 'Caramel Drift',
    price: 130,
    productImageUrl: 'assets/images/Cold/Caramel Drift.PNG',
    favorite: false,
    productId: 128,
    productPath: '/product-details/128'
  }
  ];

  nonCoffeeProducts = [
  {
    rating: 4.5,
    title: 'Mango Wave',
    price: 120,
    productImageUrl: 'assets/images/Non-Coffee/Mango Cream Wave.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.3,
    title: 'Fresh Berry Burst',
    price: 125,
    productImageUrl: 'assets/images/Non-Coffee/Fresh Berry Burst.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.5,
    title: 'Berry Cool Milkshake',
    price: 135,
    productImageUrl: 'assets/images/Non-Coffee/Berry Cool Milkshake.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.4,
    title: 'Mango Matcha',
    price: 100,
    productImageUrl: 'assets/images/Non-Coffee/Mango Matcha Delight.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.5,
    title: 'Dragon Bliss',
    price: 105,
    productImageUrl: 'assets/images/Non-Coffee/Pink Dragon Bliss.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  },
  {
    rating: 4.7,
    title: 'Cocomango Cooler',
    price: 130,
    productImageUrl: 'assets/images/Non-Coffee/Coco Mango Cooler.PNG',
    favorite: false,
    productId: 123,
    productPath: '/product-details/123'
  }
  ];

  pastryProducts = [
    {
      rating: 4.5,
      title: 'BrewMille Feuille',
      price: 120,
      productImageUrl: 'assets/images/Pastry/BrewMille Feuille.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      rating: 4.3,
      title: 'Berry Blast',
      price: 125,
      productImageUrl: 'assets/images/Pastry/Berry Cheesy Blast.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      rating: 4.5,
      title: 'Raspberry Rewind',
      price: 135,
      productImageUrl: 'assets/images/Pastry/Raspberry Rewind.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      rating: 4.4,
      title: 'Peachy Memory',
      price: 100,
      productImageUrl: 'assets/images/Pastry/Peachy Keen Memory.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      rating: 4.5,
      title: 'CinnaDeja Delight',
      price: 105,
      productImageUrl: 'assets/images/Pastry/CinnaDeja Delight.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    },
    {
      rating: 4.7,
      title: 'Choco Deja Puff',
      price: 130,
      productImageUrl: 'assets/images/Pastry/Choco Deja Puff.PNG',
      favorite: false,
      productId: 123,
      productPath: '/product-details/123'
    }
  ];


getSlideIndexes(products: any[], productsPerSlide: number) {
  return Array.from({ length: Math.ceil(products.length / productsPerSlide) }, (_, i) => i * productsPerSlide);
}


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
    }else if (window.innerWidth >= 650) {
      this.slidesPerView = 1.8;
    }else if (window.innerWidth >= 520) {
      this.slidesPerView = 1.4;
    }else {
      this.slidesPerView = 1.1;  
    }
  }

  goToNotifications() {
    window.location.href = '/notifications';
  }
  goToFavorites() {
    window.location.href = '/favorites';
  }
}
