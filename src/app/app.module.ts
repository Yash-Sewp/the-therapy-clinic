import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ThreeCardColumnComponent } from './components/three-card-column/three-card-column.component';
import { SliderComponent } from './components/slider/slider.component';
import { TextImageColumnComponent } from './components/text-image-column/text-image-column.component';
import { ThreeCardTextColumnComponent } from './components/three-card-text-column/three-card-text-column.component';

import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OccupationalTherapyComponent } from './pages/occupational-therapy/occupational-therapy.component';
import { TraumaCouncillingComponent } from './pages/trauma-councilling/trauma-councilling.component';
import { SpeechAndHearingTherapyComponent } from './pages/speech-and-hearing-therapy/speech-and-hearing-therapy.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TherapyResourcesComponent } from './pages/therapy-resources/therapy-resources.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { TextSliderComponent } from './components/text-slider/text-slider.component';
import { OpenAccordionComponent } from './components/open-accordion/open-accordion.component';
import { GeneralBannerComponent } from './components/general-banner/general-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './components/booking/booking.component';
import { NgIf, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog'
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    BannerComponent,
    ThreeCardColumnComponent,
    SliderComponent,
    TextImageColumnComponent,
    ThreeCardTextColumnComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    OccupationalTherapyComponent,
    TraumaCouncillingComponent,
    SpeechAndHearingTherapyComponent,
    GalleryComponent,
    TherapyResourcesComponent,
    TextImageComponent,
    TextSliderComponent,
    OpenAccordionComponent,
    GeneralBannerComponent,
    BookingComponent,
    BookingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: 
      { hasBackdrop: false }
    },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
