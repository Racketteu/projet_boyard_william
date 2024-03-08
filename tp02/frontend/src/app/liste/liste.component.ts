import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiproductService } from '../apiproduct.service';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})

export class ListeComponent implements OnInit {
  coffeeProducts!: Observable<CoffeeProduct[]>;
  filteredProducts: CoffeeProduct[] = [];

  constructor(private apiService: ApiproductService) { }

  ngOnInit() {
    this.coffeeProducts = this.apiService.getCoffeeProduct();
    this.coffeeProducts.subscribe(products => {
      this.filteredProducts = products;
    });
  }

  filterProducts(event: any) {
    const searchText: string = event.target.value;
    this.coffeeProducts.subscribe(products => {
      this.filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }  
}
