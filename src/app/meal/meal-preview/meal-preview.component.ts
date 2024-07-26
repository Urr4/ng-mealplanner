import {Component, Input} from '@angular/core';
import {Meal} from "../../models/Meal";

@Component({
  selector: 'app-meal-preview',
  standalone: true,
  imports: [],
  templateUrl: './meal-preview.component.html',
  styleUrl: './meal-preview.component.css'
})
export class MealPreviewComponent {

  @Input() meal!: Meal;

}
