import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {NgIf} from "@angular/common";
import { AuthService } from '../../_services/auth.service';
import { RouterLink } from '@angular/router';
import { MatTable, MatTableModule } from '@angular/material/table';
import {InvestigationList} from "../../_classes/investigation-list";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    NgIf,
    RouterLink,
    MatTable,
    MatTableModule,
  ],
  templateUrl: './ReportGenerator.component.html',
  /* template: `
     <section>
       <form>
         <input type="text" placeholder="Filter by city">
         <button class="primary" type="button">Search</button>
       </form>
     </section>
 `, */
  styleUrl: './ReportGenerator.component.scss'
})

export class ReportGeneratorComponent {

  investigations: ReportGenerator[] = []; // Create an array of InvestigationList objects.
  displayedColumns: string[] = ['ReportGeneratorId', 'name', 'processId', 'createdTime', 'actions']; // machine names for the table's columns.

}
/*export class AuthenticateComponent {
  username: string = '';
  password: string = '';

  constructor(protected authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.setTokens(res.access_token, res.refresh_token);
        this.router.navigate(['/investigation/list']);
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
} */
