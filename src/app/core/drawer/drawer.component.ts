import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Drawer } from './drawer.class';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/app.state';
import { UserService } from 'src/app/pages/login/user.service';
import { User } from 'src/app/pages/login/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {

  @Input() drawer: Drawer;

  navigationMenus = [
    {label: 'HOME', icon: 'home-outline', url: '/home'},
    {label: 'MENU', icon: 'spoon-knife', url: '/menu'},
    {label: 'ORDERS', icon: 'shopping-cart', url: '/order'},
    {label: 'CREDITS', icon: 'coin-dollar', url: '/credits'},
    {label: 'MESSAGES', icon: 'message-square', url: '/messages'},
  ];
  activeMenu: any;
  subs: Subscription[] = [];
  user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subs.push(this.userService.selectUser().subscribe( (x: AppState) => {
      this.user = x.user;
    }));
  }

  open() {
  }

  close() {
    this.drawer.close();
  }

  navAction( nav: any) {
    this.activeMenu = nav;
    this.drawer.close();

    if (nav === 'LOGOUT') {
      this.userService.logout();
    }

    this.router.navigateByUrl(nav.url);
  }

  ngOnDestroy() {
    this.subs.forEach( x => x.unsubscribe());
  }
}
