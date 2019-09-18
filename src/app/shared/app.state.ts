import { User } from '../pages/login/user.interface';
import { Menu, Food } from '../pages/menu/menu.interface';

export interface AppState {

    action?: string;
    status?: string;
    message?: string;

    user?: User;
    menu?: {
        selected?: Menu;
        addons?: {
            food: Food,
            quantity: number
        }[];
        list?: Menu[],
        page?: number,
        limit?: number,
        search?: string
    };

}
