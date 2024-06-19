import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ username : this.username, password: this.password })
      .subscribe(
        () => {
          // Rediriger vers une page après la connexion réussie
          this.router.navigate(['/accueil']);
        },
        error => {
          this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
          console.error('Login error:', error);
        }
      );
  }
}

