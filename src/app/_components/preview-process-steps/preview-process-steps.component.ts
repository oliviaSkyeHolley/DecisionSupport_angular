import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ProcessService } from '../../_services/process.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { Step } from '../../_classes/step';
import { Process } from '../../_classes/process';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-preview-process-steps',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatCheckbox, QuillModule],
  templateUrl: './preview-process-steps.component.html',
  styleUrl: './preview-process-steps.component.scss'
})
export class PreviewProcessStepsComponent {

  processId: string;
  processDetails!: Process;
  processSteps: Step[] = [];


  constructor(
    private route: ActivatedRoute,
    private processService: ProcessService,
  ) {
    this.processId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void{
    this.getProcessDetail();
  }

  getProcessDetail(): void{
    this.processService.getProcessSteps(this.processId).subscribe(
      (data) => {
        this.processDetails = data;
        this.processSteps = data.steps;
      },(error) => {
        console.error('Error fetching process details:', error);
      }
    )
  }
  
}
