import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SellComponent } from './sell/sell.component';


export const routes: Routes = [
    {path: 'form', component: FormComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'sell', component: SellComponent},
];
