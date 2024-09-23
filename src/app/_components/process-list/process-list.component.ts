import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProcessList } from '../../_classes/process-list';
import { ProcessService } from '../../_services/process.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
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
  displayedColumns: string[] = ['entityid', 'label', 'revisionStatus', 'createdTime', 'updatedTime', 'actions'];

  constructor( private processService: ProcessService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProcessList();
  }

  getProcessList(): void {
    this.processService.getProcessList().subscribe({
      next: (data) =>{this.processes = data; this.filteredProcesses = this.processes}, 
      error: (err) => console.error('Error fetching processes', err)
    });
  }

  filterProcessList(revisionStatus: any): void{
    if(revisionStatus == "All"){
      this.filteredProcesses = this.processes;
    }else{
      this.filteredProcesses = this.processes.filter(process => process.revisionStatus == revisionStatus);
    }
    
  } 

  addProcess(){}

  updateProcess(process: any){}

  deleteProcess(processId: any){}

  duplicateProcess(process: any){}

}
