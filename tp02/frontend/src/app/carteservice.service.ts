import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarteserviceService {
  private carteSubject = new BehaviorSubject<any[]>([])
  cartes$ = this.carteSubject.asObservable()

  constructor() { }

  ajouterCarte(carte: any) {
    const cartes = this.carteSubject.value.slice();
    cartes.push(carte);
    this.carteSubject.next(cartes);
  }
}
