import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('Gallery | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  slides: any = [
    {
      "img": "assets/images/IMG_0370-scaled.jpg",
    },
    {
      "img": "assets/images/IMG_0377-scaled.jpg",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
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
  }
}
