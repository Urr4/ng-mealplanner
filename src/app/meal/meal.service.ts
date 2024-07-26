import {Injectable} from '@angular/core';
import {Meal} from "../models/Meal";
import {MealComponent} from "../models/MealComponent";
import {ItemDescriptor} from "../models/ItemDescriptor";
import {Quantity} from "../models/Quantity";
import {Item} from "../models/Item";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private getMeals(): Meal[] {
    let item1 = new Item('i1', 'Brühe')
    let item2 = new Item('i2', 'Gemüse')
    let item3 = new Item('i3', 'Würstchen')
    let quantity1 = new Quantity('q1', 100, 'ml');
    let quantity2 = new Quantity('q2', 1, 'kg');
    let quantity3 = new Quantity('q3', 2, 'Stück');
    let itemDescriptor1 = new ItemDescriptor('id1', item1, quantity1);
    let itemDescriptor2 = new ItemDescriptor('id2', item2, quantity2);
    let itemDescriptor3 = new ItemDescriptor('id3', item3, quantity3);
    let itemDescriptors1: ItemDescriptor[] = [itemDescriptor1, itemDescriptor2];
    let itemDescriptors2: ItemDescriptor[] = [itemDescriptor3];
    let mealComponent1 = new MealComponent('mc1', 'Gemüsebrühe', itemDescriptors1);
    let mealComponent2 = new MealComponent('mc2', 'Würstchen', itemDescriptors2);
    let mealComponents: MealComponent[] = [mealComponent1, mealComponent2];
    let meal = new Meal('m1', 'Gemüsebrühe mit Würstchen', mealComponents);

    return [meal];
  }


  constructor() {
  }

  getRandomMeals(amount: number): Promise<Meal[]> {
    let meals: Meal[] = new Array<Meal>();
    for (let i = 0; i < amount; i++) {
      meals.push(this.getMeals()[0]);
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(meals), 1000);
    });
  }

  getMealById(id: string): Promise<Meal> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getMeals()[0]), 1000);
    });
  }

  searchMealsByName(name: string): Promise<Meal[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve([]), 1000);
    });
  }


}
