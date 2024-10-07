/**
 * @whatItDoes Where 'decision support' happens. The investigation component carries out a process and records the result.
 *
 * @description
 *  This component takes the JSON string from the backend and renders a form to be filled out.
 */

import { Component, OnInit, signal, computed, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { QuillModule } from 'ngx-quill';
import { Step } from '../../_classes/step';
import { Report } from '../../_classes/report';
import { ReportService } from '../../_services/report.service';
import { ProcessService } from '../../_services/process.service';
import { AuthService } from '../../_services/auth.service';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { DocumentService } from '../../_services/document.service';
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [QuillModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDivider, CommonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatRadioModule, FormsModule, MatCheckbox, MatTooltip, DocumentUploadComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})

export class ReportComponent implements OnInit {
  // Variables: Rendering of the form.
  @ViewChild(DocumentUploadComponent) documentUploadComponent!: DocumentUploadComponent;
  report: Report | undefined; // Object of the investigation.
  reportId: string;
  reportDetails: any;
  processJson: any;
  selectedValue: any;

  // Variables: Sidebar and Logic
  collapsed = signal(false); // Is the side bar collapsed? (boolean)
  sideNavWidth = computed(() => this.collapsed() ? '65px' : '350px'); // Width of the Side Navigation Bar
  oneStep: any; // Holds the step that is being currently completed.
  userChoices: Map<string, string> = new Map(); // Map holding the user's choices for a textbox or checkbox.
  editorContent: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private reportService: ReportService,
    private dialog: MatDialog,
    private processService: ProcessService,
    private documentService: DocumentService

  ) {
    this.reportId = this.route.snapshot.params['id'];
    this.reportDetails = this.route.snapshot.params['json_string'];

  }

  ngOnInit() {
    console.log('In an Report.');
    this.getReportDetail();
  }

  getReportDetail(): void {
    console.log('Calling Investigation Details!');
    const headers = this.authService.getHeaders();
    this.reportService.getReport(this.reportId, headers).subscribe(
      (data) => {
        this.reportDetails = data;
        if (this.reportDetails.steps) {
          this.reportDetails.steps[0].isVisible = true;
          this.oneStep = this.reportDetails.steps[0];
          this.documentService.setDocumentDetails(this.reportDetails.entityId, this.reportDetails.investigationLabel,this.oneStep.id);

        }
      },
      (error) => {
        console.error('Error fetching report details:', error);
      }
    );
  }


}
