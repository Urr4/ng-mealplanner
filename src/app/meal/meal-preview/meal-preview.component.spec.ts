import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPreviewComponent } from './meal-preview.component';

describe('MealPreviewComponent', () => {
  let component: MealPreviewComponent;
  let fixture: ComponentFixture<MealPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
