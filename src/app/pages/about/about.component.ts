import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  data: any = [
    {
      "img": "https://dummyimage.com/600x400/000/fff",
      "title": "Philosophy",
      "copy": "Every individual has the capacity to progress and succeed given the relevant support.",
    },
    {
      "img": "https://dummyimage.com/600x400/000/fff",
      "title": "Mission",
      "copy": "To facilitate and make available the relevant and appropriate intervention to all those that require it.",
    },
    {
      "img": "https://dummyimage.com/600x400/000/fff",
      "title": "Vision",
      "copy": "The provision of services to allow individuals to optimise their abilities and with support, to achieve their potential.",
    },
  ];

  whatSetsUsApart = [
    {
      "no" : 1,
      "title": "We focus on integrated therapy that looks at child development as a whole."
    },
    {
      "no" : 2,
      "title": "Regular team discussions to determine how each area of development is impacting on other areas"
    },
    {
      "no" : 3,
      "title": "We focus on scholastic success, with integration of school tasks into therapy goals, as well as integration of skills from therapy into classroom activities"
    },
    {
      "no" : 4,
      "title": "Parent involvement encouraged so that therapy skills make a difference in family lives"
    },
  ]

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('About | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
  
}
