import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { Subscription } from 'rxjs';
import { MenuService } from '../menu.service';
import { SearchService } from 'src/app/shared/components/search/search.service';
import { Menu } from '../menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  menuPopup: Popup;
  subs: Subscription[] = [];

  constructor(
    private menuService: MenuService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.menuPopup = new Popup('');
    this.menuPopup.buttons = [
      {
        label: 'Add to Order List',
        action: 'order',
        type: 'primary'
      },
      {
        label: 'Cancel',
        action: 'close',
      }
    ];

    this.subs.push(this.menuPopup.listen.subscribe( x => {
      switch (x.event) {
        case 'close':
          this.menuService.storeClearSelectedMenu();
          break;
        default:
          break;
      }
    }));

    this.subs.push(this.menuService.storeMenu().subscribe(x => {
      if (x.action === 'MENU_SELECT' && x.menu.selected) {
        this.showSelectedMenu(x.menu.selected);
      }
    }));

    this.menuService.storeLoadList({
      page: 0,
      limit: 1
    });

    this.searchService.listen.subscribe( x => {
      if (x.event === 'ON_SEARCH') {
        this.menuService.storeLoadList({
          page: 0,
          limit: 1,
          search: x.data
        });
      }
    });
  }

  private showSelectedMenu(menu: Menu) {
    this.menuPopup.title = menu.name;
    this.menuPopup.open();
  }

  ngOnDestroy(): void {
    this.subs.forEach( x => x.unsubscribe());
  }
}
