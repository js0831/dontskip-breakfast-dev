import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { Menu, Food } from '../menu.interface';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit, OnDestroy {

  @Input() readonly = false;
  subs: Subscription[] = [];
  menu: Menu;
  totalPrice = 0;

  private addons: {
    quantity: number,
    food: Food
  }[] = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.subs.push(this.menuService.storeMenu().subscribe(x => {
      if (x.action === 'MENU_SELECT') {
        this.menu = x.menu.selected;
        this.totalPrice = this.getTotalPrice();
      } else if (x.action === 'MENU_CLEAR_SELECTED') {
        this.menu = null;
        this.addons = [];
        this.totalPrice = 0;
      }

      const addonActions = ['MENU_ADD_ADDON', 'MENU_REMOVE_ADDON'];
      if (addonActions.indexOf(x.action) >= 0)  {
        this.addons = x.menu.addons;
        this.totalPrice = this.getTotalPrice();
      }
    }));
  }

  private getTotalPrice() {
    // add the default food with varians additional
    let additional = 0;
    this.menu.foods.forEach( x => {
      additional += (x.variant ? x.variant.additional : 0);
    });

    // Add addons on the total price
    let addonsTotalPrice = 0;
    this.addons.forEach( x => {
      const addonsAdditional = x.food.variant ? x.food.variant.additional : 0;
      addonsTotalPrice += ( (x.food.price + addonsAdditional) * x.quantity);
    });
    return this.menu.price + additional + addonsTotalPrice;
  }

  ngOnDestroy(): void {
    this.subs.forEach( x => x.unsubscribe());
  }
}
