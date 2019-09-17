import { Component, OnInit, Input } from '@angular/core';
import { Variant } from '../menu.interface';

@Component({
  selector: 'app-food-variant-select',
  templateUrl: './food-variant-select.component.html',
  styleUrls: ['./food-variant-select.component.scss']
})
export class FoodVariantSelectComponent implements OnInit {

  @Input() readonly = false;
  @Input() variants: Variant[] = [];
  selected: Variant;

  show = false;

  constructor() { }

  ngOnInit() {
    if (this.variants.length > 0) {
      this.selected = this.variants[0];
    }
  }

  select(choice: Variant) {
    this.selected = choice;
    this.show = false;
  }

  toggleShow() {
    if ( this.readonly ) { return; }
    this.show = !this.show;
  }
}
