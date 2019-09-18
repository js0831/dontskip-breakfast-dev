import { Component, OnInit, Input } from '@angular/core';
import { Variant, Food } from '../menu.interface';

@Component({
  selector: 'app-food-variant-select',
  templateUrl: './food-variant-select.component.html',
  styleUrls: ['./food-variant-select.component.scss']
})
export class FoodVariantSelectComponent implements OnInit {

  @Input() readonly = false;
  selected: Variant;

  @Input() food: Food;
  variants: Variant[];

  show = false;

  constructor() { }

  ngOnInit() {
    this.variants = this.food.variants;

    if (this.variants.length > 0) {
      this.selected = this.variants[0];
      this.food.variant = this.selected;
    }
  }

  select(choice: Variant) {
    this.selected = choice;
    this.food.variant = this.selected;
    this.show = false;
  }

  toggleShow() {
    if ( this.readonly ) { return; }
    this.show = !this.show;
  }
}
