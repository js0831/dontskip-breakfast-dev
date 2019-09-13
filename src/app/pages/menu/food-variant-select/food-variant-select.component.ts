import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-variant-select',
  templateUrl: './food-variant-select.component.html',
  styleUrls: ['./food-variant-select.component.scss']
})
export class FoodVariantSelectComponent implements OnInit {

  @Input() readonly = false;

  show = false;
  selected: any;

  choices = [
    {
      label: 'Plain'
    },
    {
      label: 'Garlic'
    },
    {
      label: 'Fried'
    },
    {
      label: 'Egg',
      additional: '5.00'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selected = this.choices[0];
  }

  select(choice: any) {
    this.selected = choice;
    this.show = false;
  }

  toggleShow() {
    if ( this.readonly ) { return; }
    this.show = !this.show;
  }
}
