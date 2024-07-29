import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MealPreviewListComponent} from "./meal/meal-preview-list/meal-preview-list.component";
import {MealplannerComponent} from "./meal/mealplanner/mealplanner.component";
import {
  MealComponentInputFormComponent
} from "./meal-component/mealcomponent-input-form/meal-component-input-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealPreviewListComponent, MealplannerComponent, MealComponentInputFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-mealplanner';
}
