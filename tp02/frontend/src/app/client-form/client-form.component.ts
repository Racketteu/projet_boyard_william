import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSummaryComponent } from '../data-summary/data-summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule,DataSummaryComponent,CommonModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  nom: string ='';
  prenom: string = '';
  adresse: string ='';
  cp: string ='';
  ville: string ='';
  tel: string ='';
  email: string ='';
  civilite: string ='';
  password: string ='';
  login: string ='' ;
  pays: string ='';

  showRecapitulatif: boolean = false;

  message:string  = 'Formulaire incomplet';

  informationsClient: any = {  };

  click() {
    if (this.formulaireValide()==true)
      {
        this.showRecapitulatif = true;
        this.informationsClient.nom = this.nom;
        this.informationsClient.prenom= this.prenom;
        this.informationsClient.adresse= this.adresse;
        this.informationsClient.cp= this.cp;
        this.informationsClient.ville= this.ville;
        this.informationsClient.tel= this.tel;
        this.informationsClient.email= this.email;
        this.informationsClient.civilite= this.civilite;
        this.informationsClient.password= this.password;
        this.informationsClient.login= this.login;
        this.informationsClient.pays= this.pays;
      }
      else {
        this.message ='Formulaire incomplet';
      }
    }

    formulaireValide(): boolean {
      return !!this.adresse && !!this.email && !!this.civilite && !!this.password && !!this.login;
    }
  

    validateLettres(champ: string): boolean {
      return /^[A-Za-z\s]+$/.test(champ);
    }
  
    validateChiffres(champ: string): boolean {
      return /^\d+$/.test(champ);
    }
  
  
  }
