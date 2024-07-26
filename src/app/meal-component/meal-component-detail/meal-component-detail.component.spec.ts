import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealComponentDetailComponent } from './meal-component-detail.component';

describe('MealComponentDetailComponent', () => {
  let component: MealComponentDetailComponent;
  let fixture: ComponentFixture<MealComponentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealComponentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
