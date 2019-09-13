import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../drawer/drawer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private drawerService: DrawerService
  ) { }

  ngOnInit() {
  }

  openDrawer() {
    this.drawerService.dispatch({
      event: 'DRAWER_OPEN'
    });
  }
}
