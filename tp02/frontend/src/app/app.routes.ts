import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';


export const routes: Routes = [
    {path: 'form', component: FormComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'liste', component: ListeComponent},
];
