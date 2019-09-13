import { Component, OnInit, Input } from '@angular/core';
import { Drawer } from './drawer.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() drawer: Drawer;

  navigationMenus = [
    {label: 'HOME', icon: 'home-outline', url: '/home'},
    {label: 'MENU', icon: 'spoon-knife', url: '/menu'},
    {label: 'ORDERS', icon: 'shopping-cart', url: '/order'},
    {label: 'CREDITS', icon: 'coin-dollar', url: '/credits'},
    // {label: 'ACTIVITY LOGS', icon: 'file-text', url: '/activity'},
    {label: 'MESSAGES', icon: 'message-square', url: '/messages'},
    // {label: 'QR CODE', icon: 'qrcode'}
  ];
  activeMenu: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  open() {
  }

  close() {
    this.drawer.close();
  }

  navAction( nav: any) {
    this.activeMenu = nav;
    this.drawer.close();
    this.router.navigateByUrl(nav.url);
  }
}
