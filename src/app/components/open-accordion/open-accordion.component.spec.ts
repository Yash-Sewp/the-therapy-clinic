import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAccordionComponent } from './open-accordion.component';

describe('OpenAccordionComponent', () => {
  let component: OpenAccordionComponent;
  let fixture: ComponentFixture<OpenAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAccordionComponent]
    });
    fixture = TestBed.createComponent(OpenAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
