import { Action } from '@ngrx/store';

export const USER_LOGIN = '[USER] Login';
export const USER_LOGOUT = '[USER] Logout';

export class UserLogin implements Action {
    readonly type = USER_LOGIN;
    constructor(public payload: any) {}
}

export class UserLogout implements Action {
    readonly type = USER_LOGOUT;
    constructor(public payload?: any) {}
}

export type Actions = UserLogin
| UserLogout;
