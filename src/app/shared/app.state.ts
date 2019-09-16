import { User } from '../pages/login/user.interface';

export interface AppState {

    action?: string;
    status?: string;
    message?: string;

    user?: User;
}
