import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../menu.interface';

@Component({
  selector: 'app-menu-foods',
  templateUrl: './menu-foods.component.html',
  styleUrls: ['./menu-foods.component.scss']
})
export class MenuFoodsComponent implements OnInit {

  @Input() foods: Food[];
  foodIds: string[];

  constructor() { }

  ngOnInit() {
    this.foodIds = this.getFoodIds(this.foods);
  }

  count(id: string) {
    return this.foods.filter( x => x._id === id ).length;
  }

  // withou duplicate
  private getFoodIds(foods: Food[]): string[] {
    const idHolder = [];
    const idHolderWithIndex = [];
    foods.forEach( (x: Food, index: number) => {
      const idWithIndex = `${index}-${x._id}`;
      if (idHolder.indexOf(x._id) < 0) {
        idHolder.push(x._id);
        idHolderWithIndex.push(idWithIndex);
      }
    });
    return idHolderWithIndex;
  }

  existOnTheFoodIds(id, index) {
    return this.foodIds.indexOf(`${index}-${id}`) >= 0;
  }
}
