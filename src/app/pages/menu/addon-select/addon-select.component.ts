import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Food } from '../menu.interface';

@Component({
  selector: 'app-addon-select',
  templateUrl: './addon-select.component.html',
  styleUrls: ['./addon-select.component.scss']
})
export class AddonSelectComponent implements OnInit {

  addons: Food[] = [];
  select = -1;
  quantity = 1;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.getAddons().subscribe( (x: any) => {
      this.addons = x.data.list;
    });
  }

  add() {
    if (!(this.select >= 0)) { return; }
    this.menuService.storeAddAddon({
      food: this.addons[this.select],
      quantity: this.quantity
    });

    this.quantity = 1;
    this.select = -1;
  }
}
