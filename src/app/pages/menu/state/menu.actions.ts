import { Action } from '@ngrx/store';

export const MENU_LOAD = '[MENU] Load';
export const MENU_LOAD_FINISH = '[MENU] Load finish';
export const MENU_SHOW_MORE = '[MENU] Show more';
export const MENU_SHOW_MORE_FINISH = '[MENU] Show more finish';
export const MENU_SELECT = '[MENU] Select';
export const MENU_ADD_ADDON = '[MENU] Add addon';
export const MENU_REMOVE_ADDON = '[MENU] Remove addon';

export class MenuLoad implements Action {
    readonly type = MENU_LOAD;
    constructor(public payload?: any) {}
}

export class MenuLoadFinish implements Action {
    readonly type = MENU_LOAD_FINISH;
    constructor(public payload?: any) {}
}

export class MenuShowMore implements Action {
    readonly type = MENU_SHOW_MORE;
    constructor(public payload?: any) {}
}

export class MenuShowMoreFinish implements Action {
    readonly type = MENU_SHOW_MORE_FINISH;
    constructor(public payload?: any) {}
}

export class MenuSelect implements Action {
    readonly type = MENU_SELECT;
    constructor(public payload?: any) {}
}

export class MenuAddAddon implements Action {
    readonly type = MENU_ADD_ADDON;
    constructor(public payload?: any) {}
}

export class MenuRemoveAddon implements Action {
    readonly type = MENU_REMOVE_ADDON;
    constructor(public payload?: any) {}
}

export type Actions = MenuLoad
| MenuLoadFinish
| MenuShowMore
| MenuShowMoreFinish
| MenuSelect
| MenuAddAddon
| MenuRemoveAddon;
