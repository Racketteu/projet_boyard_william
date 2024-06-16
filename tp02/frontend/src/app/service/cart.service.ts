import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoffeeProduct } from '../model/CoffeeProduct'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CoffeeProduct[]>([]);
  items$ = this.itemsSubject.asObservable();

  addItem(item: CoffeeProduct) {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, item]);
  }

  removeItem(item: CoffeeProduct) {
    const currentItems = this.itemsSubject.value;
    const index = currentItems.findIndex(i => i === item);
    if (index >= 0) {
      currentItems.splice(index, 1);
      this.itemsSubject.next([...currentItems]);
    }
  }

  getItems(): CoffeeProduct[] {
    return this.itemsSubject.value;
  }
}