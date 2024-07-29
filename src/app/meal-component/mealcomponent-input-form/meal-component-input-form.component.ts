import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CreateMealComponentRequest} from "./CreateMealComponentRequest";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-meal-component-input-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton
  ],
  templateUrl: './meal-component-input-form.component.html',
  styleUrl: './meal-component-input-form.component.css'
})
export class MealComponentInputFormComponent {

  mealComponentForm: FormGroup

  constructor(private formbuilder: FormBuilder) {
    this.mealComponentForm = this.formbuilder.group({
      name: [''],
      description: ['']
    });
    this.mealComponentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  submitMealComponent() {
    const mealComponent = this.mealComponentForm.value as CreateMealComponentRequest;
    console.log(mealComponent);
  }

  abort(){}

}
