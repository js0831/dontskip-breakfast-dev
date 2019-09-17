import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { Menu } from '../menu.interface';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit, OnDestroy {

  @Input() readonly = false;
  subs: Subscription[] = [];
  menu: Menu;
  totalPrice: number;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.subs.push(this.menuService.storeMenu().subscribe(x => {
      if (x.action === 'MENU_SELECT') {
        this.menu = x.menu.selected;

        this.totalPrice = this.menu.price;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach( x => x.unsubscribe());
  }
}
