import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarteserviceService } from '../../service/carteservice.service';
import { CommonModule } from '@angular/common';
import { CartelisteComponent } from '../carteliste/carteliste.component'

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})

export class PaiementComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private carteservice : CarteserviceService) 
  { 
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      ccv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      mois: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      annee: ['', [Validators.required,  Validators.minLength(1), Validators.maxLength(2)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.carteservice.ajouterCarte(this.form.value);
      console.log('Formulaire soumis :', this.form.value);
    } else {

      console.log('Le formulaire est invalide.');
    }
  }
}