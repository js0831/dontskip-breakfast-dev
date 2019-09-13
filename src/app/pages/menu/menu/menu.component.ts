import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  menuPopup: Popup;
  subs: Subscription[] = [];

  constructor() { }

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

    setTimeout(x => {
      this.menuPopup.open();
    }, 1000);

    this.subs.push(this.menuPopup.listen.subscribe( x => {
      // alert(x.event);
      this.menuPopup.close();
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach( x => x.unsubscribe());
  }
}
