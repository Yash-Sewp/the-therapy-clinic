import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardColumnComponent } from './three-card-column.component';

describe('ThreeCardColumnComponent', () => {
  let component: ThreeCardColumnComponent;
  let fixture: ComponentFixture<ThreeCardColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeCardColumnComponent]
    });
    fixture = TestBed.createComponent(ThreeCardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
