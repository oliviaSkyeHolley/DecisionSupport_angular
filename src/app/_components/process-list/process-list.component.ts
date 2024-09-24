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
  processes: ProcessList[] = [];
  filteredProcesses: ProcessList[] = [];
  revisionStatus= "All";
  displayedColumns: string[] = ['entityid', 'label', 'revisionStatus', 'createdTime', 'updatedTime', 'actions'];

  constructor( private processService: ProcessService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProcessList();
  }

  getProcessList(): void {
    this.processService.getProcessList().subscribe({
      next: (data) =>{this.processes = data; this.filterProcessList(this.revisionStatus);}, 
      error: (err) => console.error('Error fetching processes', err)
    });
  }

  filterProcessList(revisionStatus: any): void{
    this.revisionStatus = revisionStatus;
    if(revisionStatus == "All"){
      this.filteredProcesses = this.processes;
    }else{
      this.filteredProcesses = this.processes.filter(process => process.revisionStatus == revisionStatus);
    }
    
  } 

  createProcess(): void{
    const dialogRef = this.dialog.open(CreateProcessDialogComponent,{width: '400px'});

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.processService.postProcess(result).subscribe({
         next: (response) => {
          console.log('Successfully created process:', result);
          this.getProcessList();
         },
         error: (err) => {
          console.error('Error creating process:', err);
         }
        });
      }
    })
  }

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
            this.getProcessList();
          },
          error: (err) => {
            console.error('Error updating process:', err);
          }
        });
      }
    });
  }

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
            this.getProcessList();
          },
          error: (err) => {
            console.error('Error duplicating process:', err);
          }
        })
      }
    })
  }

  deleteProcess(processId: any){
    const dialogRef = this.dialog.open(DeleteProcessDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.processService.archiveProcess(processId).subscribe({
          next: (response) => {
            console.log('Successfully deleted process:', processId);
            this.getProcessList();
          },
          error: (err) => {
            console.error('Error deleting process:', err);
          }
        })
      }
    })
  }



}
