import {Component, OnInit} from '@angular/core';
import {MealService} from "../meal.service";
import {Meal} from "../../models/Meal";
import {NgForOf} from "@angular/common";
import {MealPreviewComponent} from "../meal-preview/meal-preview.component";

@Component({
  selector: 'app-meal-preview-list',
  standalone: true,
  imports: [
    NgForOf,
    MealPreviewComponent
  ],
  templateUrl: './meal-preview-list.component.html',
  styleUrl: './meal-preview-list.component.css'
})
export class MealPreviewListComponent implements OnInit{

  meals: Meal[] | null = null;

  constructor(private mealService: MealService) {
  }

  ngOnInit(): void {
    this.mealService.getRandomMeals(10)
      .then(meals => this.meals = meals);
  }


}
