import {Item} from "./Item";
import {Quantity} from "./Quantity";

export class ItemDescriptor {

  private id: string;
  item: Item;
  quantity: Quantity;

  constructor(id: string, item: Item, quantity: Quantity) {
    this.id = id;
    this.item = item;
    this.quantity = quantity;
  }
}
