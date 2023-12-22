import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(private title: Title, private meta: Meta) { }

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


  thePractice: any = [
    {
      "img": "assets/images/gallery/The Practice.png",
    },
    {
      "img": "assets/images/gallery/The Practice (2).png",
    },
    {
      "img": "assets/images/gallery/The Practice (3).png",
    }
  ];

  occupationalRoom: any = [];

  traumaCounselling: any = [];

  sensoryRoom: any = [];

  practiceConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "spacing": 10,
    "infinite": false,
    nextArrow: "<div class='slick-arrow slider-btn next next-slide'><i class='bi bi-arrow-right-circle-fill'></i></div>",
    prevArrow: "<div class='slick-arrow slider-btn prev prev-slide'><i class='bi bi-arrow-left-circle-fill'></i></div>",
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

  tabChanged(event: any): void {
    if (event === 1) {
      setTimeout(() => {
        this.occupationalRoom.push({
          "img": "assets/images/gallery/OT Room.png",
        },
          {
            "img": "assets/images/gallery/OT Room (2).png",
          });
      }, 500);
    } else if (event === 2) {
      setTimeout(() => {
        this.traumaCounselling.push(
          {
            "img": "assets/images/gallery/TC Room.png",
          },
          {
            "img": "assets/images/gallery/TC Room (2).png",
          }
        )
      }, 500);
    } else if (event === 3) {
      setTimeout(() => {
        this.sensoryRoom.push(
          {
            "img": "assets/images/gallery/SI Room.png",
          },
          {
            "img": "assets/images/gallery/SI Room (2).png",
          },
          {
            "img": "assets/images/gallery/SI Room (3).png",
          },
          {
            "img": "assets/images/gallery/SI Room (4).png",
          },
          {
            "img": "assets/images/gallery/SI Room (5).png",
          },
          {
            "img": "assets/images/gallery/SI Room (6).png",
          },
          {
            "img": "assets/images/gallery/SI Room (6).png",
          },
          {
            "img": "assets/images/gallery/SI Room (7).png",
          },
          {
            "img": "assets/images/gallery/SI Room (8).png",
          }
        )
      }, 500);
    }
    // Do something when tabs are changed, for example, update data or perform an action.
  }

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
