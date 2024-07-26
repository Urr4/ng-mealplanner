import {Component, Input} from '@angular/core';
import {ItemDescriptor} from "../../models/ItemDescriptor";
import {NgForOf} from "@angular/common";
import {ItemDescriptorComponent} from "../../item-descriptor/item-descriptor.component";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    NgForOf,
    ItemDescriptorComponent
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  @Input() itemDescriptors!: ItemDescriptor[];

}
