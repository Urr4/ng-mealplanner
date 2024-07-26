import {MealComponent} from "./MealComponent";

export class Meal {

  id: string;
  name: string;
  mealComponents: MealComponent[];

  constructor(id:string, name: string, mealComponents: MealComponent[]) {
    this.id = id;
    this.name = name;
    this.mealComponents = mealComponents;
  }
}
