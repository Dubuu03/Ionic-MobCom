import { Component, OnInit } from '@angular/core';

interface FavoriteItem {
  name: string;
  category: string;
  rating: number;
  image: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favorites: FavoriteItem[] = [
    {
      name: 'Lavender Green Chill',
      category: 'Non-coffee',
      rating: 5.0,
      image: 'assets/images/Non-Coffee/Lavander Green Chill.PNG',
      isFavorite: true
    },
    {
      name: 'Vanilla Bean Brew',
      category: 'Cold coffee',
      rating: 5.0,
      image: 'assets/images/Cold/Vanilla Bean Brew.PNG',
      isFavorite: true
    },
    {
      name: 'Berry Cool Milkshake',
      category: 'Non-coffee',
      rating: 5.0,
      image: 'assets/images/Non-Coffee/Berry Cool Milkshake.PNG',
      isFavorite: true
    },
    {
      name: 'Strawberry Blush Frost',
      category: 'Non-coffee',
      rating: 5.0,
      image: 'assets/images/Non-Coffee/Strawberry Blush Frost.PNG',
      isFavorite: true
    },
    {
      name: 'Herbal Frost',
      category: 'Cold coffee',
      rating: 5.0,
      image: 'assets/images/Cold/Herbal Frost.PNG',
      isFavorite: true
    },
    {
      name: 'CinnaDeja Delight',
      category: 'Pastry',
      rating: 5.0,
      image: 'assets/images/Pastry/CinnaDeja Delight.PNG',
      isFavorite: true
    }
  ];

  clearAll() {
    this.favorites = [];
  }

  toggleFavorite(item: FavoriteItem) {
    item.isFavorite = !item.isFavorite;
    this.favorites = this.favorites.filter(favorite => favorite.isFavorite);
  }

  constructor() { }

  ngOnInit() {
  }

  goToHome() {
    window.location.href = '/home';
  }
  goToNotifications() {
    window.location.href = '/notifications';
  }
}
