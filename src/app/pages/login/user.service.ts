import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AppState } from 'src/app/shared/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './state/user.actions';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public afAuth: AngularFireAuth;

  constructor(
    private injector: Injector,
    private store: Store<AppState>,
    private httpClient: HttpClient
  ) {
    this.afAuth = injector.get(AngularFireAuth);
  }

  async login(via: string) {
    this.afAuth.auth.signInWithPopup(this.getAuthProvider(via))
    .then( x => {
      this.firebaseAuthenticationSuccess(x);
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

  private async firebaseAuthenticationSuccess(data: any) {
    const firebaseToken = data.user.ma;
    const user = data.user as User;

    const token = await this.httpClient.post<any>(`${environment.apiURL}user/token`, {
      idToken: firebaseToken,
      email: user.email,
      uid: user.uid
    }).toPromise();

    user.token = token.data;
    this.storeLogin({
      data: user,
      message: 'success',
      status: 'ok'
    });
  }
  // STORE
  selectUser(): Observable<any> {
    return this.store.select('user');
  }

  private storeLogin(payload: any) {
    this.store.dispatch(new actions.UserLogin(payload));
  }
}
