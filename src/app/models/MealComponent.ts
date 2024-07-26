import {ItemDescriptor} from "./ItemDescriptor";

export class MealComponent {

  private id: string;
  private name: string;
  private itemDescriptors: ItemDescriptor[];

  constructor(id: string, name: string, itemDescriptors: ItemDescriptor[]) {
    this.id = id;
    this.name = name;
    this.itemDescriptors = itemDescriptors;
  }

}
