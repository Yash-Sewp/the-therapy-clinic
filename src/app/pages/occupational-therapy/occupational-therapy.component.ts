import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-occupational-therapy',
  templateUrl: './occupational-therapy.component.html',
  styleUrls: ['./occupational-therapy.component.scss']
})
export class OccupationalTherapyComponent {

  slides: any = [
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Sensory Integration (SI) difficulties</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "sensory-integration"
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Sensory Processing Disorder (SPD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "sensory-integration"
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Attention Deficit and Hyperactivity Disorders (ADHD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "attention-deficit"
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Learning difficulties (Reading and writing difficulties)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "learning-difficulties",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Autism Spectrum Disorders (ASD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "autism-spectrum-disorders",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Developmental Delay</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "developmental-delay",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Other Neurodevelopmental Disorders (Syndromes, Cerebral palsy etc)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "other-neurodevelopmental-disorders",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Early Intervention</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "early-intervention",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>School Readiness Assessments</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "school-readiness-assessments",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Specific challenges: </p><ul><li>Fine Motor Difficulties</li><li>Gross Motor Difficulties</li><li>Handwriting</li><li>Low Muscle Tone</li><li>Pencil Grasp and Control</li><ul>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "specific-challenges",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Time management</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "time-management",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Anxiety Disorders</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "anxiety-disorders",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Stress Management</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "stress-management",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Sleep Disorders</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "sleep-disorders",
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('Occupational Therapy | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
