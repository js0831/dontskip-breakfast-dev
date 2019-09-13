import { Component, OnInit, OnDestroy } from '@angular/core';
import { Drawer } from '../drawer/drawer.class';
import { DrawerService } from '../drawer/drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  drawer: Drawer;
  subs: Subscription[] = [];

  constructor(
    private drawerService: DrawerService
  ) {
    this.drawer = new Drawer();
  }

  ngOnInit() {
     this.subs.push(this.drawerService.listen.subscribe( x => {
        if (x.event === 'DRAWER_OPEN') {
          this.drawer.open();
        }
     }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe() );
  }
}
