/**
 * @whatItDoes Allows navigation between pages on the site.
 *
 * @description
 *  Provides navigation between the following pages: login/out, process creator, decision support.
 */
/*
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

} */

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, NgIf, NgOptimizedImage],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(protected authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout();
  }


}
