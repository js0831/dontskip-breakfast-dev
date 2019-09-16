import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { LoginService } from '../login.service';

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
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.rotateSlogan();
    this.rotateBackground();
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
    this.loginService.login(provider).then( x => {
      console.log(x);
    }).catch( error => {
      console.log(error);
    });
  }

  logout() {
    this.loginService.logout();
  }
}
