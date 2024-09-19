/**
 * @whatItDoes Component for logging in and out.
 *
 * @description
 *  This component provides an authentication screen for the user. It's the first screen they see in DecisionSupport and they will be sent here if they ever aren't authenticated.
 */

import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})

export class AuthenticateComponent {
  username: string = '';
  password: string = '';

  constructor(protected authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.setTokens(res.access_token, res.refresh_token);
        this.router.navigate(['/investigation/list']); // Where do you want to be sent after successful login?
      },
      error: (err) => {
        console.error('Login error', err);
        alert('Login failed. Please check your username and password.');
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}