import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-trauma-councilling',
  templateUrl: './trauma-councilling.component.html',
  styleUrls: ['./trauma-councilling.component.scss']
})
export class TraumaCouncillingComponent {

  typeOfTherapy = [
    {
      "no" : 1,
      "title": "Types of Therapy"
    },
    {
      "no" : 2,
      "title": "Intervention"
    },
    {
      "no" : 3,
      "title": "Coaching"
    },
    {
      "no" : 4,
      "title": "Family Systems"
    },
    {
      "no" : 5,
      "title": "Person-Centred"
    },
    {
      "no" : 6,
      "title": "Cognitive Behavioural"
    },
  ]

  servicesOffered: any = [
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>ADHD</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Autism</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Anxiety</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Anger Management</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Behavioural Issues</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Bereavement</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Career Guidance</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Child or Adolescent</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Coping Skills</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Depression</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Developmental Disorders</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Divorce</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Emotional Disturbance</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Infertility</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Learning Disabilities</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Life Coaching</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Life Transitions</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Parenting</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Peer Relationships</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Relationship Issues</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>School Issues</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Self Esteem</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Stress Management</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Traumatic Brain Injury</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    }
  ];

  emotionalTrauma: any = [
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Depression</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Post Traumatic Stress Disorder (PTSD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Flashbacks</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Unwanted Feelings & Thoughts</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Sleeplessness</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Hopelessness</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Eating disorders</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Nightmares</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Anxiety and fear</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Stress</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Memory loss</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Headaches/Migraines or muscle Pain</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Anger</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Emotionally Unstable</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "img": "https://dummyimage.com/1920x1080/000/fff",
      "title": "<p class='large-paragraph'>Unproductive Behaviour</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('Trauma Counselling | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
  
}
