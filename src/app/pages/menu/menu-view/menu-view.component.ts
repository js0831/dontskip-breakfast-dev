import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {

  open = true;
  hidden = true;

  constructor() { }

  ngOnInit() {

    setTimeout( x => {
      this.hidden = false;
    }, 2000);
  }

  close() {
    this.hidden = true;

    setTimeout( x => {
      this.open = false;
    }, 500);
  }

}
