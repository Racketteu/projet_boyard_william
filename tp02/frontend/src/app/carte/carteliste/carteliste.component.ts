import { Component, Input, OnInit, input } from '@angular/core';
import { CarteserviceService } from '../../service/carteservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carteliste',
  templateUrl: './carteliste.component.html',
  styleUrl: './carteliste.component.css'
})

export class CartelisteComponent implements OnInit {

  @Input() cartes : any[] = [];
  constructor (private carteservice : CarteserviceService) {
  }

  ngOnInit(): void {
    this.carteservice.cartes$.subscribe(cartes => {
      this.cartes = cartes;
    } )
  }
  
}
