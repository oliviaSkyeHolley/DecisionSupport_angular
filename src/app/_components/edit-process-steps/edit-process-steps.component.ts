/**
 * @whatItDoes This component lists all the process steps,some basic info about each. Multiple user actions - edit, delete, rearrange.
 *
 * @description
 *  It's accessible from the "Edit" tab.
 * The tables has columns: "ID, Description, Type, Required, Logic, Actions"
 * For each process steps the following action is available: Edit a process step (done by clicking on the edit button), Delete a process step and Rearrange the process steps
 * and save the step order changes
 */
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ProcessService } from '../../_services/process.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop'; 
import { CommonModule } from '@angular/common';
import { Step } from '../../_classes/step';
import { Process } from '../../_classes/process';
import { EditProcessStepDialogComponent } from '../dialog-components/process-dialog/edit-process-step-dialog/edit-process-step-dialog.component';
@Component({
  selector: 'app-edit-process-steps',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, CdkDrag, CdkDropList, CommonModule],
  templateUrl: './edit-process-steps.component.html',
  styleUrl: './edit-process-steps.component.scss'
})
export class EditProcessStepsComponent {
  @ViewChild(MatTable, { static: true }) table!: MatTable<Step>;

  /** Id of the process */
  processId: string;
  /** Process object to store the process details retrieved from the backend */
  processDetails!: Process;
  /** Array to store all process steps retrieved from the backend */
  processSteps: Step[] = [];
  displayedColumns: string[] = ['id', 'description', 'type', 'required','logic', 'actions'];
  changeDetected = false;

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
      },(error) => {
        // Log any errors encountered while fetching processes
        console.error('Error fetching process details:', error);
      }
    )
  }
  drop(event: CdkDragDrop<string>) {
    const previousIndex = this.processSteps.findIndex(d => d === event.item.data);
    const movedStep = this.processSteps[previousIndex];
    moveItemInArray(this.processSteps, previousIndex, event.currentIndex);
    this.processSteps.forEach((step, index) => {
      step.id = index + 1; 
    });
    this.changeDetected = true;
    this.table.renderRows();
}
  /** Opens EditProcessStepDialog and then request the backend to update the process step with the updated data. */
  openEditDialog(step:Step){
    const dialogRef = this.dialog.open(EditProcessStepDialogComponent, {
      width: '60%',
      data: { step: step, stepsData: this.processSteps }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const index = this.processDetails.steps.findIndex(step => step.stepUuid == result.stepUuid);
        this.processDetails.steps[index] = result;
        this.processService.updateProcessStep(this.processDetails.entityId, this.processDetails).subscribe({
          next: (response) => {
            console.log('Successfully updated step:', result.id);
            // Refresh the list after a process step is updated
            this.getProcessDetail();
          },
          error: (err) => {
            // Log any errors encountered while updating process step.
            console.error('Error updating step:', err);
          }
        });
      }
      
    });
  }
  /** Requests the backend to save the changes made in the process step order */
  saveChanges(){
    this.processService.updateProcessStep(this.processDetails.entityId, this.processDetails).subscribe({
      next: (response) => {
        console.log('Successfully deleted step:', this.processDetails);
        // Refresh the list after a new process step is added
        this.getProcessDetail();
      },
      error: (err) => {
        // Log any errors encountered while adding process step.
        console.error('Error adding step:', err);
      }
    });
  }

  
  deleteStep(uuid: any): void{
    const index = this.processDetails.steps.findIndex(step => step.stepUuid == uuid);
    this.processDetails.steps.splice(index);
    console.log(this.processDetails.steps)
    this.processService.updateProcessStep(this.processDetails.entityId, this.processDetails).subscribe({
      next: (response) => {
        console.log('Successfully deleted step:', this.processDetails);
        // Refresh the list after a new process step is added
        this.getProcessDetail();
      },
      error: (err) => {
        // Log any errors encountered while adding process step.
        console.error('Error adding step:', err);
      }
    });
  }
}
