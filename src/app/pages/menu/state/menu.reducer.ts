import { Action } from '@ngrx/store';
import * as actions from './menu.actions';
import { AppState } from 'src/app/shared/app.state';
import { Menu } from '../menu.interface';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: '',
    menu: {
        list: [],
        page: 0,
        limit: 1
    }
};

export function menuReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;

    switch (action.type) {
        case actions.MENU_LOAD:
        case actions.MENU_SHOW_MORE:
            const { page, limit, search } = payload;
            console.log(payload);
            return {
                ...state,
                action: 'MENU_LOAD',
                menu: {
                    list: state.menu.list,
                    page,
                    limit,
                    search
                }
            };
        case actions.MENU_LOAD_FINISH:
            return {
                ...state,
                action: 'MENU_LOAD_FINISH',
                menu: {
                    ...state.menu,
                    list: payload.data.list
                }
            };

        case actions.MENU_SHOW_MORE_FINISH:
                return {
                    ...state,
                    action: 'MENU_SHOW_MORE_FINISH',
                    menu: {
                        ...state.menu,
                        ...{
                            list: [...state.menu.list, ...payload.data.list]
                        }
                    }
                };
        default:
            return{
                ...state,
                action: ''
            };
    }
}
