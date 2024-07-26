import {Component, Input} from '@angular/core';
import {ItemDescriptor} from "../models/ItemDescriptor";

@Component({
  selector: 'app-item-descriptor',
  standalone: true,
  imports: [],
  templateUrl: './item-descriptor.component.html',
  styleUrl: './item-descriptor.component.css'
})
export class ItemDescriptorComponent {

  @Input() itemDescriptor!: ItemDescriptor;

}
