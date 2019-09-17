import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './menu.actions';
import { map, switchMap, catchError} from 'rxjs/operators';
import { Observable , of } from 'rxjs';
import { MenuService } from '../menu.service';

@Injectable()
export class MenuEffects {


  constructor(
      private actions$: Actions,
      private menuService: MenuService
    ) {}

    @Effect() menuLoad: Observable<Action> = this.actions$.pipe(
        ofType(actions.MENU_LOAD),
        switchMap((action: actions.MenuLoad) => {
            return this.menuService.getMenuList(action.payload).pipe(
                map((result) => {
                    return new actions.MenuLoadFinish(result);
                })
            );
        })
    );


    @Effect() menuShowMore: Observable<Action> = this.actions$.pipe(
        ofType(actions.MENU_SHOW_MORE),
        switchMap((action: actions.MenuShowMore) => {
            return this.menuService.getMenuList(action.payload).pipe(
                map((result) => {
                    return new actions.MenuShowMoreFinish(result);
                })
            );
        })
    );

}
