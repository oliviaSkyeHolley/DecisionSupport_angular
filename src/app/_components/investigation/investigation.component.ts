/**
 * @whatItDoes Where 'decision support' happens. The investigation component carries out a process and records the result.
 *
 * @description
 *  This component takes the JSON string from the backend and renders a form to be filled out.
 */

import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InvestigationService } from '../../_services/investigation.service';
import { ProcessService } from '../../_services/process.service';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
//import { EditorComponent } from '@tinymce/tinymce-angular';
import { Step } from '../../_classes/step';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
//import { FileUploadComponent } from '../file-upload/file-upload.component';
import { Investigation } from '../../_classes/investigation';

// Quill
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';



@Component({
  selector: 'app-investigation',
  standalone: true,
  imports: [QuillModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDivider, CommonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatRadioModule, FormsModule, MatCheckbox], //EditorComponent + FileUploadComponent Deleted to make it work.
  templateUrl: './investigation.component.html',
  styleUrl: './investigation.component.scss'
})

export class InvestigationComponent implements OnInit {



  investigation: Investigation | undefined;
  investigationId: string;
  investigationDetails: any;
  processJson: any;
  selectedValue: any;
  //init: EditorComponent['init'] = {
  //  plugins: 'lists link image table code help wordcount'
  //};

  //Ruban's variables
  collapsed = signal(false);
  sideNavWidth = computed(() => this.collapsed() ? '65px' : '350px');
  oneStep: any;
  userChoices: Map<string, string> = new Map();
  editorContent: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private investigationService: InvestigationService,
    private dialog: MatDialog,
    private processService: ProcessService
   
  ) {
    this.investigationId = this.route.snapshot.params['id'];
    this.investigationDetails = this.route.snapshot.params['json_string'];
    
  }

  ngOnInit() {
    console.log('In an Investigation.');
    this.getInvestigationDetail();
  }

  onSave() {
    // Handle the form submission logic here
    console.log('Form submitted:', this.investigationDetails);
    this.investigationService.patchInvestigation(this.investigationDetails.entityId, this.investigationDetails).subscribe(
      (error) => {
        console.error('Error saving investigation answers:', error)
      }
    );
  }

  getInvestigationDetail(): void {
    console.log('Calling Investigation Details!');
    const headers = this.authService.getHeaders();
    this.investigationService.getInvestigation(this.investigationId, headers).subscribe(
      (data) => {
        this.investigationDetails = data;
        if (this.investigationDetails.steps) {
          this.investigationDetails.steps[0].isVisible = true;
          this.oneStep = this.investigationDetails.steps[0];
          //this.investigationService.setDocumentDetails(this.investigationDetails.entityId, this.investigationDetails.investigationLabel,this.oneStep.id);
 
        }
      },
      (error) => {
        console.error('Error fetching investigation details:', error);
      }
    );
  }

  // -- DIVIDER Ruban's methods below

  getStep(stepUuid: string) {
    for (const step of this.investigationDetails.steps) {
      if (step && step.stepUuid == stepUuid) {
        this.oneStep = step;
        //this.investigationService.setDocumentDetails(this.investigationDetails.entityId, this.investigationDetails.label,this.oneStep.id);
        this.investigation = new Investigation(this.oneStep.entityId, this.oneStep.investigationLabel, this.oneStep.investigationId);

      }
    }
    return [];
  }

  onRadioChange(event: any, step: Step) {
    //store the choice in userChoices
    this.userChoices.set(step.stepUuid, event.value);
    step.isCompleted = true;

    var currentindex = step.id;
    for (currentindex; currentindex < this.investigationDetails.steps.length; currentindex++) {
      this.investigationDetails.steps[currentindex].isVisible = false;
      this.userChoices.delete(this.investigationDetails.steps[currentindex].stepUuid);
      this.investigationDetails.steps[currentindex].isCompleted = false;
      this.investigationDetails.steps[currentindex].answer = "";
    }
    //determine the next step based on conditions
    this.updateSteps();
  }

  onCheckboxChange(choice: any, step: Step) {
    //store the choice in userChoices
    this.userChoices.set(step.stepUuid, choice.choiceUuid);
    step.isCompleted = true;

    const selectedChoices = step.choices.filter(c => c.selected);
    console.log("Selected", selectedChoices)
    step.answer = selectedChoices.map(c => c.description).join(', ');

    var currentindex = step.id;
    for (currentindex; currentindex < this.investigationDetails.steps.length; currentindex++) {
      this.investigationDetails.steps[currentindex].isVisible = false;
      this.userChoices.delete(this.investigationDetails.steps[currentindex].stepUuid);
      this.investigationDetails.steps[currentindex].isCompleted = false;
      this.investigationDetails.steps[currentindex].answer = "";
    }
    //determine the next step based on conditions
    if (choice.selected) {
      this.updateSteps();
    }

  }

  getChoiceLabel(choiceUuid: any) {
    for (const step of this.investigationDetails.steps) {
      for (const choice of step.choices) {
        if (choice.choiceUuid == choiceUuid) {
          return choice.description;
        }
      }
    }
    return "";
  }

  updateSteps() {
    for (const step of this.investigationDetails.steps) {
      step.isVisible = this.checkVisibility(step);
    }
  }
  checkVisibility(step: any): boolean {
    //if there are no conditions, the step is always visible
    if (!step.conditions || step.conditions.length === 0 || step.isCompleted === true) {
      return true;
    }
    //check each condition
    for (const condition of step.conditions) {
      const userChoice = this.userChoices.get(condition.stepUuid);
      if (userChoice === condition.choiceUuid) {
        return true;
      }
    }
    return false;
  }


}