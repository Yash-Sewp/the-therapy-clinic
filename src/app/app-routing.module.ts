import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { OccupationalTherapyComponent } from './pages/occupational-therapy/occupational-therapy.component';
import { SpeechAndHearingTherapyComponent } from './pages/speech-and-hearing-therapy/speech-and-hearing-therapy.component';
import { TherapyResourcesComponent } from './pages/therapy-resources/therapy-resources.component';
import { TraumaCouncillingComponent } from './pages/trauma-councilling/trauma-councilling.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: NewsComponent },
  { path: 'occupational-therapy', component: OccupationalTherapyComponent },
  { path: 'trauma-counselling', component: TraumaCouncillingComponent },
  { path: 'speech-and-hearing', component: SpeechAndHearingTherapyComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'therapy-resources', component: TherapyResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Other options: 'disabled', 'top', or a function
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
