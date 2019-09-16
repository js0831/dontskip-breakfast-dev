import { Component, OnInit, OnDestroy } from '@angular/core';
import { DrawerService } from '../drawer/drawer.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/pages/login/user.interface';
import { UserService } from 'src/app/pages/login/user.service';
import { AppState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  user: User;

  constructor(
    private drawerService: DrawerService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subs.push(this.userService.selectUser().subscribe( (x: AppState) => {
      this.user = x.user;
    }));
  }

  openDrawer() {
    this.drawerService.dispatch({
      event: 'DRAWER_OPEN'
    });
  }

  ngOnDestroy() {
    this.subs.forEach( x => x.unsubscribe());
  }
}
