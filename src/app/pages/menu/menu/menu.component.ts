import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { Subscription } from 'rxjs';
import { Menu } from '../menu-list/menu.interface';
import { MenuService } from '../menu.service';
import { SearchService } from 'src/app/shared/components/search/search.service';

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
    this.menuPopup = new Popup('Tapsilog');
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

    // setTimeout(x => {
    //   this.menuPopup.open();
    // }, 1000);

    // this.subs.push(this.menuPopup.listen.subscribe( x => {
    //   // alert(x.event);
    //   this.menuPopup.close();
    // }));

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

  ngOnDestroy(): void {
    this.subs.forEach( x => x.unsubscribe());
  }
}
