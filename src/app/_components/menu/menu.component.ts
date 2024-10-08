/**
 * @whatItDoes Allows navigation between pages on the site.
 *
 * @description
 *  Provides navigation between the following pages: login/out, process creator, decision support.
 */

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { AuthService } from "../../_services/auth.service";



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatToolbar, CommonModule, NgIf, NgOptimizedImage],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(protected authService: AuthService,public router: Router){}

  logout(): void {
    this.authService.logout();
  }
  isActive(route: string): boolean{
    return this.router.url === route;
  }
}

