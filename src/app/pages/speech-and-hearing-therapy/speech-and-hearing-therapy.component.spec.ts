import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechAndHearingTherapyComponent } from './speech-and-hearing-therapy.component';

describe('SpeechAndHearingTherapyComponent', () => {
  let component: SpeechAndHearingTherapyComponent;
  let fixture: ComponentFixture<SpeechAndHearingTherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechAndHearingTherapyComponent]
    });
    fixture = TestBed.createComponent(SpeechAndHearingTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
