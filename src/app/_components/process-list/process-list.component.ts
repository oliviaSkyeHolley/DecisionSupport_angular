/**
 * @whatItDoes This Component lists all the processes, gives links to access them and some basic info about each. And create a new process.
 *
 * @description
 *  It's accessible from the "Process Builder" tab.
 * The tables has columns: "ID, Name, Revision Status, Created Time, Updated Time, Actions"
 * For each processes the following actions are available: View a process (done by clicking on the name), Delete (Archives It), Duplicate(create a new 
 * updated version), and  Edit 
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProcessList } from '../../_classes/process-list';
import { ProcessService } from '../../_services/process.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CreateProcessDialogComponent } from '../dialog-components/process-dialog/create-process-dialog/create-process-dialog.component';
import { Process } from '../../_classes/process';
import { UpdateProcessDialogComponent } from '../dialog-components/process-dialog/update-process-dialog/update-process-dialog.component';
import { DuplicateProcessDialogComponent } from '../dialog-components/process-dialog/duplicate-process-dialog/duplicate-process-dialog.component';
import { DeleteProcessDialogComponent } from '../dialog-components/process-dialog/delete-process-dialog/delete-process-dialog.component';
@Component({
  selector: 'app-process-list',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatSelectModule, RouterLink],
  templateUrl: './process-list.component.html',
  styleUrl: './process-list.component.scss'
})
export class ProcessListComponent {

  /** Array to store all processes retrieved from the backend */
  processes: ProcessList[] = [];
  /** Array to store the filtered processes based on revision status */
  filteredProcesses: ProcessList[] = [];
  revisionStatus = "All";  // Default revision status filter
  displayedColumns: string[] = ['entityid', 'label', 'revisionStatus', 'createdTime', 'updatedTime', 'actions'];

  constructor( private processService: ProcessService, private dialog: MatDialog) { }

  ngOnInit(): void {
    /** Fetch the list of processes when the component loads */
    this.getProcessList();
  }

  /** Fetch the available processes from the backend and update the array objects */
  getProcessList(): void {
    this.processService.getProcessList().subscribe({
      next: (data) =>{this.processes = data; this.filterProcessList(this.revisionStatus);}, 
      // Log any errors encountered while fetching processes
      error: (err) => console.error('Error fetching processes', err) 
    });
  }

  /** Filter the available processes based on the seletced revision status */
  filterProcessList(revisionStatus: any): void{
    this.revisionStatus = revisionStatus;
    if(revisionStatus == "All"){
      // No filtering, show all processes
      this.filteredProcesses = this.processes; 
    }else{
      this.filteredProcesses = this.processes.filter(process => process.revisionStatus == revisionStatus);
    }
    
  } 

  /** Opens CreateProcessDialog and then request the backend to create a new process with the provided data. */
  createProcess(): void{
    const dialogRef = this.dialog.open(CreateProcessDialogComponent,{width: '400px'});

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.processService.postProcess(result).subscribe({
         next: (response) => {
          console.log('Successfully created process:', result);
          // Refresh the list after a new process is created
          this.getProcessList();
         },
         error: (err) => {
          // Log any errors encountered while creating process.
          console.error('Error creating process:', err);
         }
        });
      }
    })
  }

   /** Opens UpdateProcessDialog and then request the backend to update the process with the updated data. */
  updateProcess(process: ProcessList){
    const dialogRef = this.dialog.open(UpdateProcessDialogComponent, {
      width: '400px', data: {
        process: process,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.processService.patchProcess(process.entityId, result).subscribe({
          next: (response) => {
            console.log('Successfully updated process:', result);
            // Refresh the list after the process is updated
            this.getProcessList();
          },
          error: (err) => {
            // Log any errors encountered while updating process
            console.error('Error updating process:', err);
          }
        });
      }
    });
  }

  /** Opens DuplicateProcessDialog and then request the backend to create a updated version of the existing process with the provided data. */
  duplicateProcess(process: Process){
    const dialogRef = this.dialog.open(DuplicateProcessDialogComponent, {
      width: '400px', data: {
        process: process,
      },
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.processService.duplicateProcess(result).subscribe({
          next: (response) => {
            console.log('Successfully duplicated process:', result);
            // Refresh the list after a updated version of existing process is created
            this.getProcessList();
          },
          error: (err) => {
            // Log any errors encountered while duplicating process
            console.error('Error duplicating process:', err);
          }
        })
      }
    })
  }

  /** Opens DeleteProcessDialog, after user confirmation, request the backend to archive the process. */
  deleteProcess(processId: any){
    const dialogRef = this.dialog.open(DeleteProcessDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.processService.archiveProcess(processId).subscribe({
          next: (response) => {
            console.log('Successfully deleted process:', processId);
            // Refresh the list after a  process is archived
            this.getProcessList();
          },
          error: (err) => {
            // Log any errors encountered while deleting process
            console.error('Error deleting process:', err);
          }
        })
      }
    })
  }



}
