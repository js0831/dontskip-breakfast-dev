import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private action = new Subject<{event: string, data?: any}>();

  constructor(
  ) {
  }

  dispatch(action: {event: string, data?: any}) {
    this.action.next(action);
  }

  get listen() {
    return this.action;
  }
}
