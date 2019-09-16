import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AppState } from 'src/app/shared/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './state/user.actions';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public afAuth: AngularFireAuth;

  constructor(
    private injector: Injector,
    private store: Store<AppState>
  ) {
    this.afAuth = injector.get(AngularFireAuth);
  }

  login(via: string) {
    this.afAuth.auth.signInWithPopup(this.getAuthProvider(via))
    .then( x => {
      const profile = x.additionalUserInfo.profile as User;
      this.storeLogin({
        data: profile,
        message: 'success',
        status: 'ok'
      });
    })
    .catch( x => {
      this.storeLogin({
        data: null,
        message: 'login failed',
        status: 'error'
      });
    });
  }

  logout() {
    return this.afAuth.auth.signOut().then( x => {
      this.store.dispatch(new actions.UserLogout());
    });
  }

  private getAuthProvider(provider: string) {
    switch (provider) {
      case 'facebook':
        return new auth.FacebookAuthProvider();
        break;
      case 'google':
        return new auth.GoogleAuthProvider();
        break;
      default:
        break;
    }
  }

  // STORE
  selectUser(): Observable<any> {
    return this.store.select('user');
  }

  private storeLogin(payload: any) {
    this.store.dispatch(new actions.UserLogin(payload));
  }
}
