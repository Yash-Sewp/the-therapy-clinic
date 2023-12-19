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
      "title": "<p class='large-paragraph'>ADHD</p>",
      "icon": "ADHD",
    },
    {
      "title": "<p class='large-paragraph'>Autism</p>",
      "icon": "Autism Spectrum Disorders (ASD)",
    },
    {
      "title": "<p class='large-paragraph'>Anxiety</p>",
      "icon": "Anxiety Disorders",
    },
    {
      "title": "<p class='large-paragraph'>Anger Management</p>",
      "icon": "Anger Management",
    },
    {
      "title": "<p class='large-paragraph'>Behavioural Issues</p>",
      "icon": "Behavioural Issues",
    },
    {
      "title": "<p class='large-paragraph'>Bereavement</p>",
      "icon": "Bereavement",
    },
    {
      "title": "<p class='large-paragraph'>Career Guidance</p>",
      "icon": "Career Guidance",
    },
    {
      "title": "<p class='large-paragraph'>Child or Adolescent</p>",
      "icon": "Child_ Adolecent",
    },
    {
      "title": "<p class='large-paragraph'>Coping Skills</p>",
      "icon": "Coping Skills",
    },
    {
      "title": "<p class='large-paragraph'>Depression</p>",
      "icon": "Depression",
    },
    {
      "title": "<p class='large-paragraph'>Developmental Disorders</p>",
      "icon": "Developmental Delay",
    },
    {
      "title": "<p class='large-paragraph'>Divorce</p>",
      "icon": "Divorce",
    },
    {
      "title": "<p class='large-paragraph'>Emotional Disturbance</p>",
      "icon": "Emotional Disturbance",
    },
    {
      "title": "<p class='large-paragraph'>Infertility</p>",
      "icon": "Infertility",
    },
    {
      "title": "<p class='large-paragraph'>Learning Disabilities</p>",
      "icon": "Learning Difficulties",
    },
    {
      "title": "<p class='large-paragraph'>Life Coaching</p>",
      "icon": "Life Coaching",
    },
    {
      "title": "<p class='large-paragraph'>Life Transitions</p>",
      "icon": "Life Transitions",
    },
    {
      "title": "<p class='large-paragraph'>Parenting</p>",
      "icon": "Parenting",
    },
    {
      "title": "<p class='large-paragraph'>Peer Relationships</p>",
      "icon": "Peer Relationships",
    },
    {
      "title": "<p class='large-paragraph'>Relationship Issues</p>",
      "icon": "Relationship Issues",
    },
    {
      "title": "<p class='large-paragraph'>School Issues</p>",
      "icon": "School Issues",
    },
    {
      "title": "<p class='large-paragraph'>Self Esteem</p>",
      "icon": "Self Esteem",
    },
    {
      "title": "<p class='large-paragraph'>Stress Management</p>",
      "icon": "Stress Management",
    },
    {
      "title": "<p class='large-paragraph'>Traumatic Brain Injury</p>",
      "icon": "Brain Injury",
    }
  ];

  emotionalTrauma: any = [
    {
      "title": "<p class='large-paragraph'>Depression</p>",
      "icon": "Depression",
    },
    {
      "title": "<p class='large-paragraph'>Post Traumatic Stress Disorder (PTSD)</p>",
      "icon": "https://dummyimage.com/1920x1080/000/fff",
    },
    {
      "title": "<p class='large-paragraph'>Flashbacks</p>",
      "icon": "Flashbacks",
    },
    {
      "title": "<p class='large-paragraph'>Unwanted Feelings & Thoughts</p>",
      "icon": "Unwanted Feelings & Thoughts",
    },
    {
      "title": "<p class='large-paragraph'>Sleeplessness</p>",
      "icon": "Sleep Disorders",
    },
    {
      "title": "<p class='large-paragraph'>Hopelessness</p>",
      "icon": "Hopelessness",
    },
    {
      "title": "<p class='large-paragraph'>Eating disorders</p>",
      "icon": "Eating Disorders",
    },
    {
      "title": "<p class='large-paragraph'>Nightmares</p>",
      "icon": "Nightmares",
    },
    {
      "title": "<p class='large-paragraph'>Anxiety and fear</p>",
      "icon": "Anxiety Disorders",
    },
    {
      "title": "<p class='large-paragraph'>Stress</p>",
      "icon": "Stress",
    },
    {
      "title": "<p class='large-paragraph'>Memory loss</p>",
      "icon": "Memory Loss",
    },
    {
      "title": "<p class='large-paragraph'>Headaches/Migraines or muscle Pain</p>",
      "icon": "Headaches",
    },
    {
      "title": "<p class='large-paragraph'>Anger</p>",
      "icon": "Anger Management",
    },
    {
      "title": "<p class='large-paragraph'>Emotionally Unstable</p>",
      "icon": "Emotional Disturbance",
    },
    {
      "title": "<p class='large-paragraph'>Unproductive Behaviour</p>",
      "icon": "Unproductive Behaviour",
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
