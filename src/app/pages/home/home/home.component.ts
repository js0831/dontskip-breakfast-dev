import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../login/user.interface';
import { Subscription } from 'rxjs';
import { UserService } from '../../login/user.service';
import { AppState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {



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

  redirect(page: string) {
    this.router.navigate([page]);
  }

  ngOnDestroy() {
    this.subs.forEach( x => x.unsubscribe());
  }
}
