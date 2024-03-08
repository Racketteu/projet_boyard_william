import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiproductService } from '../apiproduct.service';

@Component({
  selector: 'app-filtrage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtrage.component.html',
  styleUrl: './filtrage.component.css'
})

export class FiltrageComponent {
  minPrice: number = 0;
  maxPrice: number = 99999999;
  searchName: string = "";

  constructor(private apiService: ApiproductService) {}

  filterByCriteria(): void {
    this.apiService.updateFilterCriteria({ 
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      searchName: this.searchName });
  }
}
