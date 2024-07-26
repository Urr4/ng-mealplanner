import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescriptorComponent } from './item-descriptor.component';

describe('ItemDescriptorComponent', () => {
  let component: ItemDescriptorComponent;
  let fixture: ComponentFixture<ItemDescriptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDescriptorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
