import { Component } from '@angular/core';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.scss']
})
export class TextSliderComponent {
  slides: any = [
    {
      "title": "Mission",
      "copy": "To facilitate and make available the relevant and appropriate intervention to all those that require it.",
    },
    {
      "title": "Vision",
      "copy": "The provision of services to allow individuals to optimise their abilities and with support, to achieve their potential.",
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
}
