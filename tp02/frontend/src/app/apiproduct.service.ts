import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CoffeeProduct } from './model/CoffeeProduct';
import { environment } from './environments/environments';

@Injectable({
  providedIn: 'root'
})

export class ApiproductService {

  constructor(private http:HttpClient) { }
  public getCoffeeProduct () : Observable<CoffeeProduct[]> {
      return this.http.get<CoffeeProduct[]>(environment.backendClient);
  }
}
