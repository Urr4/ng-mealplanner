import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MealPreviewListComponent} from "./meal/meal-preview-list/meal-preview-list.component";
import {MealplannerComponent} from "./meal/mealplanner/mealplanner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealPreviewListComponent, MealplannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-mealplanner';
}
