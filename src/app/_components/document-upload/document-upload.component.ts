/**
 * @whatItDoes Allows the user to upload documents to an investigation.
 *
 * @description
 *  Provides functions for handling the uploading and display of documents.
 *  Uploaded documents cannnot be accessed after uploading, only their names displayed.
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DocumentUploadService } from '../../_services/document-upload.service';
import { DocumentService } from '../../_services/document.service';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss'
})
export class DocumentUploadComponent {
  selectedFile: File | null = null;
  uploadResponse: string | null = null;
  documentList: any[] = [];

  constructor(private documentUploadService: DocumentUploadService, private documentService: DocumentService) { }

  ngOnInit() {
    this.getDocumentList();

  }
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload(): void {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    this.documentUploadService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        console.log('Upload complete:', response);

        // Extract the fid from the response
        const fileFid = response?.fid?.[0]?.value;
        if (fileFid) {
          // Proceed to create the investigation document entity in the backend.
          this.createInvestigationDocument(fileFid);
        } else {
          console.error('File fid not found in the response');
          this.uploadResponse = 'File upload successful, but file fid is missing.';
        }
      },
      error: (err) => {
        console.error('Upload error:', err);
        this.uploadResponse = `Upload failed: ${err.message}`;
      }
    });
  }

  createInvestigationDocument(fid: string): void {
    const label = this.documentService.getLabel();
    const notes = 'This is a test document';
    const stepId = this.documentService.getStepId();  
    const investigationId = this.documentService.getInvestigationId();

    this.documentUploadService.createInvestigationDocument(fid, label, notes, stepId, investigationId).subscribe({
      next: (response) => {
        console.log('Investigation document creation complete:', response);
        this.uploadResponse = `Upload and entity creation successful: ${JSON.stringify(response)}`;
      },
      error: (err) => {
        console.error('Entity creation error:', err);
        this.uploadResponse = `Entity creation failed: ${err.message}`;
      }
    });
  }

  getDocumentList(): void {
    this.documentUploadService.getDocumentlist(this.documentService.getInvestigationId()).subscribe({
      next: (data) => this.documentList = data,
      error: (err) => console.error('Error fetching reports', err)
    });

    console.log(this.documentList)
  }
}