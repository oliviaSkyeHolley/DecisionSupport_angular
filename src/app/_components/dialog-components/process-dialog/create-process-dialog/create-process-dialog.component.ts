import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-process-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormField, CommonModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './create-process-dialog.component.html',
  styleUrl: './create-process-dialog.component.scss'
})
export class CreateProcessDialogComponent {

  form: FormGroup;
  revisionStatus: RevisionStatus[] = [
    { value: 'Archived', label: 'Archived' },
    { value: 'Draft', label: 'Draft' },
    { value: 'Published', label: 'Published' }
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateProcessDialogComponent>) {
    this.form = this.fb.group({
      label: [''],
      revision_status: ['Draft']
    });
  }

  close(): void {
    this.dialogRef.close();
    this.form.reset();
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } 
  }
}

interface RevisionStatus {
  value: string;
  label: string;
}
