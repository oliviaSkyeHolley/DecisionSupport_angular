/**
 * @whatItDoes Allows a route to be activated and accessible if the user is authenticated.
 *
 * @description 
 * Provides authentication.
 *
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const userRole = this.authService.getUserRole();
  
  if (this.authService.isLoggedIn()) {
    // Check if user is an admin
    if (userRole?.includes('administrator')) {
      return true; 
    }
    // Check if user is a regular user and restrict access to the process page
    if (userRole?.includes('user') && (route.routeConfig?.path === 'process' || route.routeConfig?.path === 'process/:id')) {
      this.router.navigate(['/home']); 
      return false;
    }
    return true; 
  } else {
    this.router.navigate(['/user/login']); // Redirect to login if not authenticated
    return false;
  }
  }
}