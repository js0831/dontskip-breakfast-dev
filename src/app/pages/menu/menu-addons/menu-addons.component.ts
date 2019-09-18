import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { Food } from '../menu.interface';

@Component({
  selector: 'app-menu-addons',
  templateUrl: './menu-addons.component.html',
  styleUrls: ['./menu-addons.component.scss']
})
export class MenuAddonsComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  addons: {
    quantity: number,
    food: Food
  }[] = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.subs.push(this.menuService.storeMenu().subscribe( x => {
      const actions = ['MENU_ADD_ADDON', 'MENU_REMOVE_ADDON'];
      if (actions.indexOf(x.action) >= 0)  {
        this.addons = x.menu.addons;
      }
    }));
  }

  remove(index: number) {
    this.menuService.storeRemoveAddon(index);
  }

  ngOnDestroy() {
    this.subs.forEach( x => x.unsubscribe());
  }
}
