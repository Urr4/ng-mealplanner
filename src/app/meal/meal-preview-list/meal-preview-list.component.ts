import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Meal} from "../../models/Meal";
import {NgForOf} from "@angular/common";
import {MealPreviewComponent} from "../meal-preview/meal-preview.component";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-meal-preview-list',
  standalone: true,
  imports: [
    NgForOf,
    MealPreviewComponent,
    MatTableModule
  ],
  templateUrl: './meal-preview-list.component.html',
  styleUrl: './meal-preview-list.component.css'
})
export class MealPreviewListComponent {

  @Input() meals!: Meal[];
  selectedMeal: Meal | null = null;

  @Output() mealSelected = new EventEmitter<Meal>();

  displayedColumns: string[] = ['name'];

  constructor() {
  }

  selectMeal(meal: Meal) {
    if (this.selectedMeal == meal) {
      this.selectedMeal = null;
    } else {
      this.selectedMeal = meal;
    }
    this.mealSelected.emit(meal);
  }

}
