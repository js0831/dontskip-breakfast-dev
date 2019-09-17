import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../menu.interface';

@Component({
  selector: 'app-menu-foods',
  templateUrl: './menu-foods.component.html',
  styleUrls: ['./menu-foods.component.scss']
})
export class MenuFoodsComponent implements OnInit {

  @Input() foods: Food[];

  constructor() { }

  ngOnInit() {
  }

}
