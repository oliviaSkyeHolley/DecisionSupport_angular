import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-process-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-process-dialog.component.html',
  styleUrl: './delete-process-dialog.component.scss'
})
export class DeleteProcessDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteProcessDialogComponent>) { }

  close(): void {
    this.dialogRef.close(null);
  }
  ok(): void {
    this.dialogRef.close(true);
  }
}
