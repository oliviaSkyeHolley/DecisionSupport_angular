import { Component, Inject } from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Step } from '../../../../_classes/step';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-process-step-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatDividerModule, CommonModule],
  templateUrl: './view-process-step-dialog.component.html',
  styleUrl: './view-process-step-dialog.component.scss'
})
export class ViewProcessStepDialogComponent {

  processStep!: Step;
  processSteps: Step[] = [];
  
  constructor( public dialogRef: MatDialogRef<ViewProcessStepDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { step: any; stepsData: any[] }){
  this.processStep = data.step;
  this.processSteps = data.stepsData;
  }
  getStepDescription(stepUuid: string){
    for (const step of this.data.stepsData) {   
      if (step && step.stepUuid === stepUuid) {
        return step.description;
      }
    }
  
  return ""; 
  }
  getChoiceDescription(stepUuid: string, choiceUuid: string){
    for (const step of this.data.stepsData) {   
      if (step && step.stepUuid === stepUuid) {
        for(const choice of step.choices){
          if(choice && choice.choiceUuid === choiceUuid){
            return choice.description;
          }
        }
      }
    }
  
  return ""; 
  }
 
}
