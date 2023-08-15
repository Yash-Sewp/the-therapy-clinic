import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-therapy-resources',
  templateUrl: './therapy-resources.component.html',
  styleUrls: ['./therapy-resources.component.scss']
})
export class TherapyResourcesComponent {
  constructor(private title: Title, private meta: Meta) {}

  occupationalFiles: any = [
    {
      "title": "Basic Development Milestones",
      "url": "assets/docs/Basic-Dvt-Milestones.pdf",
    },
  ];

  speechHearingFiles: any = [
    {
      "title": "Speech Sound Development Chart",
      "url": "assets/docs/Speech-Sound-Development-Chart.pdf",
    },
  ];

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('Therapy Resources | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
