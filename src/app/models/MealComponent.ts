import {ItemDescriptor} from "./ItemDescriptor";

export class MealComponent {

  id: string;
  name: string;
  description: string;
  itemDescriptors: ItemDescriptor[];

  constructor(id: string, name: string, description: string, itemDescriptors: ItemDescriptor[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.itemDescriptors = itemDescriptors;
  }

}
