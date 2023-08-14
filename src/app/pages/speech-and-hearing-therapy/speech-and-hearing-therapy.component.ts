import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-speech-and-hearing-therapy',
  templateUrl: './speech-and-hearing-therapy.component.html',
  styleUrls: ['./speech-and-hearing-therapy.component.scss']
})
export class SpeechAndHearingTherapyComponent {

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
