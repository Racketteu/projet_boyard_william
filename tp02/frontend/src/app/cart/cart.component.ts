import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: CoffeeProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.items = items;
    });
  }

  removeFromCart(item: CoffeeProduct) {
    this.cartService.removeItem(item);
  }
}