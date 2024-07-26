import {Component, Input} from '@angular/core';
import {MealComponent} from "../../models/MealComponent";
import {NgForOf} from "@angular/common";
import {ItemDescriptorComponent} from "../../item-descriptor/item-descriptor.component";

@Component({
  selector: 'app-meal-component-detail',
  standalone: true,
  imports: [
    NgForOf,
    ItemDescriptorComponent
  ],
  templateUrl: './meal-component-detail.component.html',
  styleUrl: './meal-component-detail.component.css'
})
export class MealComponentDetailComponent {

  @Input() mealComponent!: MealComponent;

}
