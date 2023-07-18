import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyResourcesComponent } from './therapy-resources.component';

describe('TherapyResourcesComponent', () => {
  let component: TherapyResourcesComponent;
  let fixture: ComponentFixture<TherapyResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherapyResourcesComponent]
    });
    fixture = TestBed.createComponent(TherapyResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
