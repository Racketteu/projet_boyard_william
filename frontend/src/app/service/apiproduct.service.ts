import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, switchMap, map } from 'rxjs';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})

export class ApiproductService {
  private filterCriteria = new BehaviorSubject<{minPrice?: number, maxPrice?: number, searchName?: string}>({});
  private UrlProduct = '/api/product';

  constructor(private http: HttpClient) { }

  get coffeeProductsFiltered(): Observable<CoffeeProduct[]> {  
    return this.filterCriteria.pipe(
      switchMap(criteria => 
        this.http.get<CoffeeProduct[]>(this.UrlProduct).pipe(
          map(products => products.filter(product => 
            (!criteria.minPrice || product.price >= criteria.minPrice) &&
            (!criteria.maxPrice || product.price <= criteria.maxPrice) &&
            (!criteria.searchName || product.name.toLowerCase().includes(criteria.searchName.toLowerCase()))
          ))
        )
      )
    );
  }

  updateFilterCriteria(criteria: {minPrice?: number, maxPrice?: number, searchName?: string}): void {
    this.filterCriteria.next(criteria);
  }
}