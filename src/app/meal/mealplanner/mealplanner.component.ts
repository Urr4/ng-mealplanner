import {Component, OnInit} from '@angular/core';
import {MealPreviewListComponent} from "../meal-preview-list/meal-preview-list.component";
import {Meal} from "../../models/Meal";
import {MealDetailComponent} from "../meal-detail/meal-detail.component";
import {NgIf} from "@angular/common";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {MealService} from "../meal.service";
import {ItemDescriptor} from "../../models/ItemDescriptor";

@Component({
  selector: 'app-mealplanner',
  standalone: true,
  imports: [
    MealPreviewListComponent,
    MealDetailComponent,
    NgIf,
    ShoppingListComponent
  ],
  templateUrl: './mealplanner.component.html',
  styleUrl: './mealplanner.component.css'
})
export class MealplannerComponent implements OnInit {

  meals: Meal[] = [];
  selectedMeal: Meal | null = null;

  itemsToBuy: ItemDescriptor[] = [];

  constructor(private mealService: MealService) {
  }

  ngOnInit(): void {
    this.mealService.getRandomMeals(10)
      .then(meals => {
        this.meals = meals;
        this.itemsToBuy = this.meals
          .map(meal => meal.mealComponents)
          .flatMap(mealComponents => mealComponents.map(mealComponent => mealComponent.itemDescriptors))
          .flatMap(itemDescriptors => itemDescriptors);
      });
  }

  selectMeal(meal: Meal) {
    this.selectedMeal = meal;
  }

}
