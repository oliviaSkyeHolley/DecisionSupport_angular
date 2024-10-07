/**
 * @whatItDoes This Component lists all the reports, gives links to access them and some basic info about each. And generates a new report.
 *
 * @description
 *  It's accessible from the "report generator" tab.
 * The tables has columns: "ID, Name, Updated Time"
 */

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router} from '@angular/router';
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
  /** Inject Mat Snack Bar */
  private snackBar = inject(MatSnackBar);
  /** Array to store all reports retrieved from the backend */
  reports: ReportList[] = [];
  /** Table Columns */
  displayedColumns: string[] = ['entityid', 'label', 'updatedTime', 'actions'];

  constructor(/*private reportService: reportService,*/ private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    /** Fetch the list of processes and check for unsaved data when the component loads */
   // this.getReportList();
    this.checkUnsavedData();
  }

  /** Check for unSaved data and alert the user if data exist */
  checkUnsavedData(): void{
    //Get Data from local Storage
    const unsavedData = localStorage.getItem("unsavedStepData");
    //If data exist alert the user
    if(unsavedData){
      let formattedData = JSON.parse(unsavedData);
      //Open Alert Dialog
      const dialogRef = this.dialog.open(UnsavedStepAlertDialogComponent,{width: '800px', data: {unSavedData: formattedData}});
      dialogRef.afterClosed().subscribe(result =>{
        if(result){
          //If the user want to continue. Navigate the user to the desired page
          this.router.navigate(['/report_generator/', formattedData.reportId]);
        }
      })

    }
  }
/*
  /** Fetch the available processes from the backend and update the array objects
  getReportList(): void {
    this.reportService.getReportList().subscribe(
      (data) => {
        this.reports = data;
      },
      (error) =>{
        // Log any errors encountered while fetching processes
        console.error('Error fetching reports');
        this.snackBar.open('Error Fetching reports - Try Again', 'Ok',{
          duration: 3000
        });
      }
    );
  }
*/

  /** Opens CreateReportDialog and then request the backend to generate a new report with the provided data.
  createProcess(): void {
    const dialogRef = this.dialog.open(CreateReportDialogComponent, { width: '450px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reportService.postReport(result).subscribe({
          next: (response) => {
            // Log the success message
            console.log('Successfully created report');
            this.snackBar.open('Successfully generated report', 'Ok', {
              duration: 1000
            });
            // Refresh the list after a new process is created
            this.getReportList();
          },
          error: (err) => {
            // Log any errors encountered while creating process.
            console.error('Error Generating Report:', err);
            this.snackBar.open('Error Generating Report - Try Again', 'Ok', {
              duration: 2000
            });
          }
        });
      }
    })
  }
    */


}
