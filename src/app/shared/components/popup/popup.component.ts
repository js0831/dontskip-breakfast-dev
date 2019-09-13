import { Component, OnInit, Input } from '@angular/core';
import { Popup } from './popup.class';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() ctrl: Popup;

  constructor() { }

  ngOnInit() {
  }


  close() {
    this.ctrl.close();
  }

  buttonAction(action: string) {
    if (action === 'close') {
      this.ctrl.close();
    }
    this.ctrl.dispatchAction({
      event: action
    });
  }
}
