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
      "title": "<p class='large-paragraph'>Sensory Integration (SI) difficulties</p>",
      "icon": "Sensory Integration (SI)",
      "anchor": "sensory-integration"
    },
    {
      "title": "<p class='large-paragraph'>Sensory Processing Disorder (SPD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "sensory-integration"
    },
    {
      "title": "<p class='large-paragraph'>Attention Deficit and Hyperactivity Disorders (ADHD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
      "anchor": "attention-deficit"
    },
    {
      "title": "<p class='large-paragraph'>Learning difficulties (Reading and writing difficulties)</p>",
      "icon": "Learning Difficulties",
      "anchor": "learning-difficulties",
    },
    {
      "title": "<p class='large-paragraph'>Autism Spectrum Disorders (ASD)</p>",
      "icon": "Autism Spectrum Disorders (ASD)",
      "anchor": "autism-spectrum-disorders",
    },
    {
      "title": "<p class='large-paragraph'>Developmental Delay</p>",
      "icon": "Developmental Delay",
      "anchor": "developmental-delay",
    },
    {
      "title": "<p class='large-paragraph'>Other Neurodevelopmental Disorders (Syndromes, Cerebral palsy etc)</p>",
      "icon": "Neurodevelopmental Disorders",
      "anchor": "other-neurodevelopmental-disorders",
    },
    {
      "title": "<p class='large-paragraph'>Early Intervention</p>",
      "icon": "Early Intervention",
      "anchor": "early-intervention",
    },
    {
      "title": "<p class='large-paragraph'>School Readiness Assessments</p>",
      "icon": "School Readiness Assessments",
      "anchor": "school-readiness-assessments",
    },
    {
      "title": "<p class='large-paragraph'>Specific challenges: </p><ul><li>Fine Motor Difficulties</li><li>Gross Motor Difficulties</li><li>Handwriting</li><li>Low Muscle Tone</li><li>Pencil Grasp and Control</li><ul>",
      "icon": "Specific Challenges",
      "anchor": "specific-challenges",
    },
    {
      "title": "<p class='large-paragraph'>Time management</p>",
      "icon": "Time management",
      "anchor": "time-management",
    },
    {
      "title": "<p class='large-paragraph'>Anxiety Disorders</p>",
      "icon": "Anxiety Disorders",
      "anchor": "anxiety-disorders",
    },
    {
      "title": "<p class='large-paragraph'>Stress Management</p>",
      "icon": "Stress Management",
      "anchor": "stress-management",
    },
    {
      "title": "<p class='large-paragraph'>Sleep Disorders</p>",
      "icon": "Sleep Disorders",
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
