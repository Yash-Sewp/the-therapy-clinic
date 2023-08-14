import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  docs: any = [
    {
      "title": "Audiological testing of cochlear implanted children in an EI-programme in SA",
      "url": "assets/docs/Audiological-testing-of-cochlear-implanted-children-in-an-EI-programme-in-SA.pdf",
    },
    {
      "title": "Cochlear Implantation in an early intervention programme in South Africa",
      "url": "assets/docs/COCHLEAR_IMPLANTATION-IN-AN-EARLY-INTERVENTION-PROGRAMME-IN-SOUTH-AFRICA.pdf",
    },
    {
      "title": "Data management for EHDI in SA",
      "url": "assets/docs/Data-management-for-EHDI-in-SA.pdf",
    },
    {
      "title": "Diagnostic hearing testing of infants in SA",
      "url": "assets/docs/Diagnostic-hearing-testing-of-infants-in-SA.pdf",
    },
    {
      "title": "ECD policies in South Africa – What about children with disabilities",
      "url": "assets/docs/ECD_policies_in_South_Africa-What_about_children_with-disabilities.pdf",
    },
    {
      "title": "Narrative review of EHDI in SA",
      "url": "assets/docs/Narrative-review-of-EHDI-in-SA.pdf",
    },
    {
      "title": "Paediatric diagnostic audiology testing in SA",
      "url": "assets/docs/Paediatric-diagnostic-audiology-testing-in-SA.pdf"
    },
    {
      "title": "Role of the neonatal nurse in EHDI",
      "url": "assets/docs/Role-of-the-neonatal-nurse-in-EHDI.pdf"
    },
    {
      "title": "Sedation for paediatric auditory electrophysiology in SA",
      "url": "assets/docs/Sedation-for-paediatric-auditory-electrophysiology-in-SA.pdf"
    }
  ];

  constructor(private title: Title, private meta: Meta) {}
  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('News | The Therapy Clinic');
    this.meta.updateTag({ name: 'description', content: '' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
