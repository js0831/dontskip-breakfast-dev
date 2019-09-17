import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../menu.service';
import { AppState } from 'src/app/shared/app.state';
import { Subscription } from 'rxjs';
import { Menu } from '../menu.interface';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy {


  menu: {
    list?: Menu[],
    page?: number,
    limit?: number,
    search?: string
  };

  subs: Subscription[] = [];
  moreToLoad = true;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.subs.push(this.menuService.storeMenu().subscribe( (x: AppState) => {
      const updateWithActions = ['MENU_LOAD_FINISH', 'MENU_SHOW_MORE_FINISH'];

      // hide show more button if list complete
      if ( x.action === updateWithActions[1] && this.menu.list.length === x.menu.list.length) {
        this.moreToLoad = false;
      }

      if (updateWithActions.indexOf(x.action) >= 0) {
        this.menu = x.menu;
      }
    }));
  }

  selectMenu(menu: Menu) {
    this.menuService.storeSelectMenu(menu);
  }

  showMore() {
    this.menuService.storeShowMore({
      page: this.menu.page + 1,
      limit: this.menu.limit,
      search: this.menu.search
    });
  }

  ngOnDestroy() {
    this.subs.forEach( x => x.unsubscribe());
  }
}

