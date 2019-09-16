import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { AppState } from 'src/app/shared/app.state';
import { User } from '../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginPopup = new Popup('Login');

  fbButtonStyle = {
    color: '#fff',
    background: '#5f83cf'
  };

  slogan = [
    {
      h1: 'Don\'t Skip',
      h2: 'The most important meal of the day'
    },
    {
      h1: 'Don\'t have time to prepare your breakfast?',
      h2: 'Don\'t worry. We\'ve got you covered.'
    },
    {
      h1: 'Eat now, Pay later',
      h2: 'How cool is that? :)'
    }
  ];
  activeSloganIndex = 0;
  transitionClass: string;
  transitionTimer: any;

  background = 1;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.rotateSlogan();
    this.rotateBackground();

    this.userService.selectUser().subscribe( (x: AppState) => {
      if (x.action === 'USER_LOGIN') {
        if (x.status === 'ok') {
          this.router.navigate(['home']);
        } else {
          alert('Login Failed');
        }
      }
    });
  }

  private rotateSlogan() {
    this.transitionTimer = setTimeout( x => {
      let newIndex = this.activeSloganIndex + 1;
      if ( newIndex > (this.slogan.length - 1) ) {
        newIndex = 0;
      }
      this.transitionClass = 'exit';

      setTimeout( z => {
        this.activeSloganIndex = newIndex;
        this.transitionClass = '';
        this.rotateSlogan();
      }, 1000);
    }, 8000);
  }

  ngOnDestroy() {
    clearTimeout(this.transitionTimer);
  }

  rotateBackground() {
    setInterval( x => {
      this.background += 1;
      if (this.background > 4) {
        this.background = 1;
      }
    }, 5000);
  }

  login(provider) {
    this.userService.login(provider);
  }

  logout() {
    this.userService.logout();
  }
}
