import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos'; //AOS - 1
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  constructor(public dialog: MatDialog) {}
  
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
