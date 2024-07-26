import {Component, Input} from '@angular/core';
import {Meal} from "../../models/Meal";
import {NgForOf} from "@angular/common";
import {MealComponentDetailComponent} from "../../meal-component/meal-component-detail/meal-component-detail.component";

@Component({
  selector: 'app-meal-detail',
  standalone: true,
  imports: [
    NgForOf,
    MealComponentDetailComponent
  ],
  templateUrl: './meal-detail.component.html',
  styleUrl: './meal-detail.component.css'
})
export class MealDetailComponent {

  @Input() meal!: Meal;

}
