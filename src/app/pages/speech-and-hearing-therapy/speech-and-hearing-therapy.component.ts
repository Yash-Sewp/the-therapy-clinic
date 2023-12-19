import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-speech-and-hearing-therapy',
  templateUrl: './speech-and-hearing-therapy.component.html',
  styleUrls: ['./speech-and-hearing-therapy.component.scss']
})
export class SpeechAndHearingTherapyComponent {

  services: any = [
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Early language intervention</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Auditory Processing (AP) difficulties</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Articulation therapy (difficulty pronouncing sounds)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Neonatal feeding/sucking difficulties</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Pre-literacy skills</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Reading skills</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Social skills (pragmatics)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Receptive language difficulties (difficulty understanding)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Expressive language difficulties (difficulty speaking)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>School comprehension skills</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Writing skills</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Auditory rehabilitation and scholastic skills development for hearing aid and cochlear </p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Implant Users</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Child stuttering</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Adult stuttering</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    }
  ];


  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('Speech And Hearing Therapy | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
