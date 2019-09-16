import { Action } from '@ngrx/store';
import * as actions from './user.actions';
import { AppState } from 'src/app/shared/app.state';
import { User } from '../user.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: ''
};

export function userReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;
    switch (action.type) {
        case actions.USER_LOGIN:
            const data = payload.data;
            const user: User = data ? {
                uid: data.uid,
                displayName: data.displayName,
                photoURL: data.photoURL,
                email: data.email,
                phoneNumber: data.phoneNumber,
                token: data.token
            } : null;

            LocalStorageService.save('user', user);
            return {
                ...state,
                action: 'USER_LOGIN',
                message: payload.message,
                status: payload.status,
                user
            };

        case actions.USER_LOGOUT:
            LocalStorageService.remove('user');
            return {
                ...state,
                action: 'USER_LOGOUT',
                user: null,
                status: 'ok',
                message: 'success'
            };
        default:
            const currentUser = LocalStorageService.get('user') as User;
            return{
                ...state,
                user: currentUser || null,
                action: ''
            };
    }
}
