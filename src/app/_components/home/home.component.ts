import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { AuthService } from '../../_services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    NgIf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
