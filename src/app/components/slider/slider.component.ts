import { Component, Input } from '@angular/core';
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
  @Input() slides: any;

  slideCount: number = 1;
  arrayLength: number = 10;



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
