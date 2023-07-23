import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  selectedTimeValue: string = "";
  selectedVenueValue: string = "";
  isActive: string = "";
  tabComplete: string = "";
  selected: Date | null | undefined;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  cellphoneFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);

  checkInValue = new FormControl<Date | null>(null) || "";
  checkOutValue = new FormControl<Date | null>(null) || "";

  matcher = new MyErrorStateMatcher();

  isBookingActive: Boolean = false;
  isPersonalDetailsActive: boolean = false;
  isPaymentActive: boolean = false;
  isBookingSummaryActive: boolean = false;
  isConfirmationActive: boolean = false;
  isFormDataValid: boolean = false;
  // checkInDate: any;
  // checkOutDate: any;

  selectedVenueOT: boolean = false;
  selectedVenueSHT: boolean = false;
  selectedVenueTC: boolean = false;

  ngOnInit(): void {
    this.isBookingActive = true;
  }

  openTab($event: any, type: string) {
    var i, tabcontent, tablinks;
    var typeContainer = document.getElementById(type);
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add('d-none');
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if(typeContainer !== null) {
      typeContainer.classList.add('d-block');
      typeContainer.classList.remove('d-none');
      console.log($event.currentTarget.className);

      $event.currentTarget.className += " active";
    }
  }

  selectVenueOption(venue: string) {
    console.log(venue);

    if(venue == "Occupational Therapy") {
      this.selectedVenueOT = true;
      this.selectedVenueSHT = false;
      this.selectedVenueTC = false;
    } else if (venue == "Speech & Hearing Therapy") {
      this.selectedVenueOT = false;
      this.selectedVenueTC = false;
      this.selectedVenueSHT = true;
    } else if (venue == "Trauma Counselling") {
      this.selectedVenueOT = false;
      this.selectedVenueTC = true;
      this.selectedVenueSHT = false;
    }

    this.selectedVenueValue = venue;
  }

  selectTime(time: string) {
    this.selectedTimeValue = time;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}