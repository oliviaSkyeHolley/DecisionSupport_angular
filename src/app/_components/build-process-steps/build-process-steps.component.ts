/**
 * @whatItDoes This component lists all the process steps,some basic info about each. And add a new process.
 *
 * @description
 *  It's accessible from the "Build" tab.
 * The tables has columns: "ID, Description, Type, Required, Logic, Actions"
 * For each process steps the following action is available: View a process step (done by clicking on the view button)
 */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProcessService } from '../../_services/process.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Step } from '../../_classes/step';
import { Process } from '../../_classes/process';
import { ViewProcessStepDialogComponent } from '../dialog-components/process-dialog/view-process-step-dialog/view-process-step-dialog.component';
import { AddProcessStepDialogComponent } from '../dialog-components/process-dialog/add-process-step-dialog/add-process-step-dialog.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-build-process-steps',
  standalone: true,
  imports: [MatTableModule, FormsModule, MatFormField, MatInput, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './build-process-steps.component.html',
  styleUrl: './build-process-steps.component.scss'
})
export class BuildProcessStepsComponent {

  /** Id of the process */
  processId: string;
  /** Process object to store the process details retrieved from the backend */
  processDetails!: Process;
  /** Array to store all process steps retrieved from the backend */
  processSteps: Step[] = [];
  /** Array to store filtered process steps */
  filteredProcessSteps: Step[] = [];
  searchInput: string = "";
  displayedColumns: string[] = ['id', 'description', 'type', 'required','logic', 'actions'];

  constructor(private route: ActivatedRoute, private processService: ProcessService, private dialog: MatDialog){
    /** Set the process ID from the route */
    this.processId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void{
    /** Fetch the process steps when the component loads */
    this.getProcessDetail();
  }

  /** Fetch the available process steps from the backend and update the array objects */
  getProcessDetail(): void{
    this.processService.getProcessSteps(this.processId).subscribe(
      (data) => {
        this.processDetails = data;
        this.processSteps = data.steps;
        this.filteredProcessSteps = this.processSteps;
      },(error) => {
        // Log any errors encountered while fetching processes
        console.error('Error fetching process details:', error);
      }
    )
  }

    /** Filter the available processes based on the user serach input */
    filterBySearch(): void {
      const searchTerm = this.searchInput?.trim().toLowerCase() || '';
      if (!searchTerm) {
        //Show all processes when search input is empty
        this.filteredProcessSteps = this.processSteps; 
        return;
      }
      this.filteredProcessSteps = this.processSteps.filter(processStep => 
        processStep.description?.toLowerCase().includes(searchTerm)
      );
    }

  /** Opens AddProcessStepDialog and then request the backend to add the new process step with the provided data. */
  addProcessStep(): void{
    const dialogRef = this.dialog.open(AddProcessStepDialogComponent, {
      width: '80%',
      data: this.processSteps
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.processDetails.steps.push(result);
        this.processService.updateProcessStep(this.processDetails.entityId, this.processDetails).subscribe({
          next: (response) => {
            console.log('Successfully added step:', result);
            // Refresh the list after a new process step is added
            this.getProcessDetail();
          },
          error: (err) => {
            // Log any errors encountered while adding process step.
            console.error('Error adding step:', err);
          }
        });
      }
    });
  }
/** Opens ViewProcessDialog to display the process step details*/
  openViewDetailDialog(step: Step): void{
    const dialogRef = this.dialog.open(ViewProcessStepDialogComponent, {
      width: '60%',
      data: { step: step, stepsData: this.processSteps }
    });
  }

}
