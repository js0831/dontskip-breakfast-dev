import { Component, OnInit, OnDestroy } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

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

  constructor(public afAuth: AngularFireAuth) {}

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

    if (provider === 'g') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then( x => {
        console.log(x);
      }).catch( error => {
        console.log(error);
      });
    } else if (provider === 'f') {
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then( x => {
        console.log(x);
      }).catch( error => {
        console.log(error);
      });
    }

  }

  logout() {
    this.afAuth.auth.signOut().then( x => {
      console.log(x);
    }).catch( error => {
      console.log(error);
    });
  }
}
