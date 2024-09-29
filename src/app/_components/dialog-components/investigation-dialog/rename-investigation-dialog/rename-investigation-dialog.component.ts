/**
 * @whatItDoes Is a dialog box which recieves input from the user to rename an investigation.
 *
 * @description There is only one input: "What will you rename the investigation to?"
 *  
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rename-investigation-dialog',
  standalone: true,
  imports: [MatDialogContent, MatFormField, MatDialogActions, ReactiveFormsModule],
  templateUrl: './rename-investigation-dialog.component.html',
  styleUrl: './rename-investigation-dialog.component.scss'
})

export class RenameInvestigationDialogComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RenameInvestigationDialogComponent>)
  {
    this.form = this.fb.group({
      name: [''], // holds the new name of the investigation.
    });
  }

  // If the dialog is closed, reset the form, and don't pass anything on.
  close(): void {
    this.dialogRef.close(null);
    this.form.reset();
    }

  // When the new name is submitted, close this component and pass on the new name.
  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.name);
    }
  }
}
