/**
 * @whatItDoes It's a table that lists all of the active investigations, gives links to access them and some basic info about each.
 *
 * @description
 *  It's accessible from the "DecisionSupport" tab.
 * The tables has columns: "ID#, Name, Process Type, Time Created"
 * For each investigations the following actions are available: Open (done by clicking on the name), Delete (Archives It), Change Name
 */

import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { InvestigationList } from '../../_classes/investigation-list';
import { InvestigationService } from '../../_services/investigation.service';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NewInvestigationDialogComponent } from '../dialog-components/new-investigation-dialog/new-investigation-dialog.component';

@Component({
  selector: 'app-investigation-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatTable, MatTableModule],
  templateUrl: './investigation-list.component.html',
  styleUrl: './investigation-list.component.scss'
})

export class InvestigationListComponent {

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

  // Opens NewInvestigationDialogComponent and then tells the backend to create a new investigation.
  addInvestigation(): void {
    const dialogRef = this.dialog.open(NewInvestigationDialogComponent, {
      width: '400px'
    });

    // Recieves result from NewInvestigationDialogComponent...
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        const formattedData = {
          label: result.name,
          process_id: result.process_id,
          json_string: JSON.stringify({ name: result.name }) 
        }
        // ... and posts it to the backend!
        this.investigationService.postInvestigation(formattedData).subscribe({
          next: (response) => {
            console.log('Successfully added investigation: ', formattedData);
            this.getInvestigations();
          },
          error: (err) => {
            console.error('Error adding report: ', err);
          }
        });
      }
    });
  }

  // Sends an archive request to the backend.
  archiveInvestigation(id: string): void {
    this.investigationService.archiveInvestigation(id).subscribe({
      next: (response) => {
        this.getInvestigations();
      },
      error: (err) => {
        console.error('Error fetching reports: ', err)
      }
    })
  }
}