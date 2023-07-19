import { Component } from '@angular/core';

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
      "copy": "The provision of services to allow individuals to optimise their abilities and with support, to achieve their potential.",
    },
    {
      "img": "https://dummyimage.com/600x400/000/fff",
      "title": "Mission",
      "copy": "Every individual has the capacity to progress and succeed given the relevant support.",
    },
    {
      "img": "https://dummyimage.com/600x400/000/fff",
      "title": "Vision",
      "copy": "The provision of services to allow individuals to optimise their abilities and with support, to achieve their potential.",
    },
  ];
}
