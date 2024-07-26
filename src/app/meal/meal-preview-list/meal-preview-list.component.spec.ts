import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPreviewListComponent } from './meal-preview-list.component';

describe('MealPreviewListComponent', () => {
  let component: MealPreviewListComponent;
  let fixture: ComponentFixture<MealPreviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPreviewListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
