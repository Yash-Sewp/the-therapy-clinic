import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}