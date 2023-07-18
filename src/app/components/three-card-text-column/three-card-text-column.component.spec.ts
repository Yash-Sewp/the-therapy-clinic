import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardTextColumnComponent } from './three-card-text-column.component';

describe('ThreeCardTextColumnComponent', () => {
  let component: ThreeCardTextColumnComponent;
  let fixture: ComponentFixture<ThreeCardTextColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeCardTextColumnComponent]
    });
    fixture = TestBed.createComponent(ThreeCardTextColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
