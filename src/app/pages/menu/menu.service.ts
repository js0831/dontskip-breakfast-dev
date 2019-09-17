import { Injectable } from '@angular/core';
import { AppState } from 'src/app/shared/app.state';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as actions from './state/menu.actions';
import { Observable } from 'rxjs';
import { PaginationParams } from 'src/app/shared/interfaces/pagination-params.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient
  ) {
  }

  getMenuList(params: PaginationParams) {
    const {page, limit, search} = params;
    const urlParams = `?page=${page}&limit=${limit}&search=${search || ''}`;
    return this.httpClient.get(`${environment.apiURL}menu${urlParams}`);
  }

  // STORE
  storeSelectMenu(): Observable<AppState> {
    return this.store.select('menu') as Observable<AppState>;
  }

  storeLoadList(param: PaginationParams) {
    this.store.dispatch(new actions.MenuLoad(param));
  }

  storeShowMore(param: PaginationParams) {
    this.store.dispatch( new actions.MenuShowMore(param));
  }

}
