/**
 * @whatItDoes This Component lists all the reports, gives links to access them and some basic info about each. And generates a new report.
 *
 * @description
 *  It's accessible from the "report generator" tab.
 * The tables has columns: "ID, Name, Updated Time"
 */

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, Router, Routes} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ReportList } from '../../_classes/report-list';
import { ReportService } from '../../_services/report.service';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
//import { CreateReportDialogComponent } from '../dialog-components/report-dialog/create-report-dialog/create-report-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsavedStepAlertDialogComponent } from '../dialog-components/process-dialog/unsaved-step-alert-dialog/unsaved-step-alert-dialog.component';
import { InvestigationList } from '../../_classes/investigation-list';
import { InvestigationService } from '../../_services/investigation.service';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../_services/auth.service";
import {ReportComponent} from "../report/report.component";
@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, CommonModule, MatSelectModule, RouterLink],
  templateUrl: './report-list.component.html',
  /* template: `
     <section>
       <form>
         <input type="text" placeholder="Filter by city">
         <button class="primary" type="button">Search</button>
       </form>
     </section>
 `, */
  styleUrl: './report-list.component.scss'
})

export class ReportListComponent {
 investigations: InvestigationList[] = []; // Create an array of InvestigationList objects.
  displayedColumns: string[] = ['investigationId', 'name', 'processId', 'createdTime', 'actions']; // machine names for the table's columns.

  constructor(private http: HttpClient, private authService: AuthService, private investigationService: InvestigationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInvestigations();
    console.log(this.investigations);
  }

  // Queries the backend and returns all investigations.
  getInvestigations(): void {
    this.investigationService.getInvestigationList().subscribe({
      next: (data) => this.investigations = data,
      error: (err) => console.error('Error fetching reports: ', err)
    });
  }



  // Sends an archive request to the backend.
  createReport() {
  }


}
