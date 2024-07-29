import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealComponentInputFormComponent } from './meal-component-input-form.component';

describe('MealcomponentInputFormComponent', () => {
  let component: MealComponentInputFormComponent;
  let fixture: ComponentFixture<MealComponentInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealComponentInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealComponentInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
