import { Component } from '@angular/core';
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent {

  slideCount: number = 1;
  arrayLength: number = 10;

  slides: any = [
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Sensory Integration (SI) difficulties/ Sensory Processing Disorder (SPD)",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "sensory-integration"
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Attention Deficit and Hyperactivity Disorders (ADHD)",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "attention-deficit"
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Learning difficulties (Reading and writing difficulties)",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "learning-difficulties",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Autism Spectrum Disorders (ASD)",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "autism-spectrum-disorders",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Developmental Delay",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "developmental-delay",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Other Neurodevelopmental Disorders (Syndromes, Cerebral palsy etc)",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "other-neurodevelopmental-disorders",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Early Intervention",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "early-intervention",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "School Readiness Assessments",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "school-readiness-assessments",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Specific challenges",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "specific-challenges",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Time management",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "time-management",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Anxiety Disorders",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "anxiety-disorders",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Stress Management",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "stress-management",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Sleep Disorders",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "sleep-disorders",
    }
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "spacing": 10,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log(e);
    this.slideCount = 1;
    this.slideCount = this.slideCount + e.nextSlide;
  }

  scrollTo(id: any) {
    console.log(id);
  }
}
