import { Component, OnInit } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  menuPopup: Popup;
  slide = false;

  constructor() { }

  ngOnInit() {
    this.menuPopup = new Popup('Select Menu');

    // TEMP
    setTimeout( x => {
      this.menuPopup.open();

      setTimeout( y => {
        this.menuPopup.buttons = [
          {
            label: 'Back'
          },
          {
            label: 'Order',
            type: 'primary'
          }
        ];
        this.menuPopup.title = 'Tapsilog';
        this.slide = true;

        setTimeout( z => {
          this.menuPopup.buttons = [];
          this.menuPopup.title = 'Select Menu';
          this.slide = false;
        }, 10000);
      }, 2000);
    }, 2000);
  }

}
