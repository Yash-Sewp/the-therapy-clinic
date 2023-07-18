import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageColumnComponent } from './text-image-column.component';

describe('TextImageColumnComponent', () => {
  let component: TextImageColumnComponent;
  let fixture: ComponentFixture<TextImageColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextImageColumnComponent]
    });
    fixture = TestBed.createComponent(TextImageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
