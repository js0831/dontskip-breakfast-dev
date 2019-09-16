import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public afAuth: AngularFireAuth;

  constructor(
    private injector: Injector
  ) {
    this.afAuth = injector.get(AngularFireAuth);

  }

  login(via: string) {
    return this.afAuth.auth.signInWithPopup(this.getAuthProvider(via));
  }

  logout() {
    return this.afAuth.auth.signOut();
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
}
