import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiproductService } from '../apiproduct.service';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  imports: [CommonModule],
  standalone: true
})

export class ListeComponent implements OnInit {

  coffeeProducts!: Observable<CoffeeProduct[]>;

  constructor(private apiService: ApiproductService) { }

  ngOnInit() {
    this.coffeeProducts = this.apiService.getCoffeeProduct();
    console.log(this.coffeeProducts)
  }
}