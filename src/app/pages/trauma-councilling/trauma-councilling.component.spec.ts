import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraumaCouncillingComponent } from './trauma-councilling.component';

describe('TraumaCouncillingComponent', () => {
  let component: TraumaCouncillingComponent;
  let fixture: ComponentFixture<TraumaCouncillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraumaCouncillingComponent]
    });
    fixture = TestBed.createComponent(TraumaCouncillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
