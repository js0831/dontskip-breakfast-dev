import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list-v2',
  templateUrl: './menu-list-v2.component.html',
  styleUrls: ['./menu-list-v2.component.scss']
})
export class MenuListV2Component implements OnInit {

  menus: any[];
  view = 'grid';

  constructor() { }

  ngOnInit() {
    this.menus = new Array(20).fill('test');

    // setTimeout( x => {
    //   this.view = 'list';
    // }, 5000);
  }

}
