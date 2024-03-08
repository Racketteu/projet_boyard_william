import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiproductService } from '../apiproduct.service';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltrageComponent } from '../filtrage/filtrage.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  imports: [CommonModule, FormsModule, FiltrageComponent],
  standalone: true
})

export class ListeComponent implements OnInit {
  coffeeProducts!: Observable<CoffeeProduct[]>;
  filteredProducts: CoffeeProduct[] = [];

  constructor(private apiService: ApiproductService) { }

  ngOnInit() {
    this.apiService.coffeeProductsFiltered.subscribe(filteredProducts => {
      this.filteredProducts = filteredProducts;
    });
  }
}
