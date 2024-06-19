import { Routes } from '@angular/router';
import { LoginComponent } from './signup/login/login.component';
import { RegisterComponent } from './signup/register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './product/liste/liste.component';
import { CartComponent } from './cart/cart.component';
import { PaiementComponent } from './carte/paiement/paiement.component';


export const routes: Routes = [
    {path: 'signup', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'liste', component: ListeComponent},
    {path: 'paiement', component: PaiementComponent},
    {path: 'panier', component: CartComponent},
    {path : '', component: AccueilComponent}
];
