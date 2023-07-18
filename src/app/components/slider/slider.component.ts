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
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Testing",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "Testing 2",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
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
}
