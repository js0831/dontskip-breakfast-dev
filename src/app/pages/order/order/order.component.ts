import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { MenuService } from '../../menu/menu.service';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/components/search/search.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  menuPopup: Popup;
  slide = false;
  subs: Subscription[] = [];

  constructor(
    private menuService: MenuService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.menuPopup = new Popup('Select Menu');

    // TEMP
    setTimeout( x => {
      this.menuPopup.open();
      this.menuService.storeLoadList({
        page: 0,
        limit: 1
      });
    }, 2000);

    this.listenToMenuSearch();
    this.listenToMenuStore();
    this.listenToPopupEvents();
  }

  private listenToMenuSearch() {
    this.subs.push(this.searchService.listen.subscribe( x => {
      if (x.event === 'ON_SEARCH') {
        this.menuService.storeLoadList({
          page: 0,
          limit: 1,
          search: x.data
        });
      }
    })); // END: subs
  }
  private listenToMenuStore() {
    this.subs.push(this.menuService.storeMenu().subscribe(x => {
      if (x.action === 'MENU_SELECT' && x.menu.selected) {
        this.menuPopup.buttons = [
          {
            label: 'Back',
            action: 'back'
          },
          {
            label: 'Order',
            type: 'primary'
          }
        ];
        this.menuPopup.title = x.menu.selected.name;
        this.slide = true;
      }
    }));
  }

  private listenToPopupEvents() {
    this.subs.push(this.menuPopup.listen.subscribe( x => {
      switch (x.event) {
        case 'back':
          this.menuPopup.buttons = [];
          this.menuPopup.title = 'Select Menu';
          this.slide = false;
          break;

        case 'close':
          this.menuService.storeClearSelectedMenu();
          break;
        default:
          break;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach( x => x.unsubscribe());
  }
}
