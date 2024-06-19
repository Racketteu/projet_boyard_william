import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  Email: string = '';
  Password: string = '';
  ConfirmPassword: string = '';
  UserName: string = '';
  ErrorMessage: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const User = {
      username: this.UserName,
      email: this.Email,
      password: this.Password,
    };
    if(this.Password != this.ConfirmPassword)
    {
      console.log("Not same password");
      this.ErrorMessage = "Password ne correspond pas à ConfirmPassword";
    }
    else 
    {
      this.authService.register(User)
      .subscribe(
        response => {
          console.log('Registration successful', response);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }
}
