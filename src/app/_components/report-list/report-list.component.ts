
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, Router, Routes} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../_services/auth.service";
import { DecisionSupportService } from '../../_services/decision-support.service';
import { ReportService } from '../../_services/report.service';
@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, CommonModule, MatSelectModule, RouterLink],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.scss'
})
export class ReportListComponent {

  investigations: any; // Create an array of InvestigationList objects.
  filteredInvestigation: any;
  displayedColumns: string[] = ['investigationId', 'name', 'processId', 'createdTime', 'actions']; // machine names for the table's columns.

  constructor(private http: HttpClient, private authService: AuthService, private investigationService: ReportService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInvestigations();
    console.log(this.investigations);
  }

  getInvestigations(): void {
    this.investigationService.getReportList().subscribe(
      (data) => { 
        this.investigations = data; 
        this.filteredInvestigation = this.investigations.filter((d: { isCompleted: boolean; }) => d.isCompleted == true);
      },
      (error) =>{
        // Log any errors encountered while fetching processes
      
         console.error('Error fetching processes');
      } 
    );
    }






}
