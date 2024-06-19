import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartelisteComponent } from './carteliste/carteliste.component'
import { PaiementComponent } from './paiement/paiement.component';




@NgModule({
  declarations: [CartelisteComponent,PaiementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,],
  exports: [
    CartelisteComponent, PaiementComponent
  ]
})

export class CarteModule 
{ }


