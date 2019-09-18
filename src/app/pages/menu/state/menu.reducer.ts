import * as actions from './menu.actions';
import { AppState } from 'src/app/shared/app.state';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: '',
    menu: {
        list: [],
        page: 0,
        limit: 1,
        addons: []
    }
};

export function menuReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;
    const currentAddOns = state.menu.addons || [];

    switch (action.type) {
        case actions.MENU_LOAD:
        case actions.MENU_SHOW_MORE:
            const { page, limit, search } = payload;
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
        case actions.MENU_SELECT:
                return {
                    ...state,
                    action: 'MENU_SELECT',
                    menu: {
                        ...state.menu,
                        ...{
                            selected: payload
                        }
                    }
                };


        case actions.MENU_ADD_ADDON:
            return {
                ...state,
                action: 'MENU_ADD_ADDON',
                menu: {
                    ...state.menu,
                    ...{
                        addons: [...currentAddOns, payload]
                    }
                }
            };

        case actions.MENU_REMOVE_ADDON:
                return {
                    ...state,
                    action: 'MENU_REMOVE_ADDON',
                    menu: {
                        ...state.menu,
                        ...{
                            addons: currentAddOns.filter((item, index) => index !== payload )
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
