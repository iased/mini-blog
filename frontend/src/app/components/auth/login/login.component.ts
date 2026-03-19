import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService,private router: Router) {}

  login() {
    this.loading = true;
    this.errorMessage = '';
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.loading = false;
        console.log('Logged in', res);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }
}
