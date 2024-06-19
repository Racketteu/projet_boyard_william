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
    const existingItem = currentItems.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      this.itemsSubject.next([...currentItems]);
    } else {
      this.itemsSubject.next([...currentItems, { ...item }]);
    }
  }
  removeItem(item: CoffeeProduct) {
    const currentItems = this.itemsSubject.value;
    const index = currentItems.findIndex(i => i.name === item.name);
    if (index >= 0) {
      if (currentItems[index].quantity > 1) {
        currentItems[index].quantity--;
      } else {
        currentItems.splice(index, 1);
      }
      this.itemsSubject.next([...currentItems]);
    }
  }

  getItems(): CoffeeProduct[] {
    return this.itemsSubject.value;
  }
}