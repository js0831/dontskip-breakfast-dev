import { User } from '../pages/login/user.interface';
import { Menu } from '../pages/menu/menu-list/menu.interface';

export interface AppState {

    action?: string;
    status?: string;
    message?: string;

    user?: User;
    menu?: {
        list?: Menu[],
        page?: number,
        limit?: number,
        search?: string
    };

}
