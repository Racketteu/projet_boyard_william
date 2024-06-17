import { Component, OnInit } from '@angular/core';
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
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  addToCart(item: CoffeeProduct) {
    this.cartService.addItem(item);
    this.updateCart();
  }

  removeFromCart(item: CoffeeProduct) {
    this.cartService.removeItem(item);
    this.updateCart();
  }

  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0); // Calcul du total en tenant compte de la quantité
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }
}