import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private event = new Subject<{event: string, data?: any}>();

  constructor() { }

  get listen() {
    return this.event;
  }

  dispatch(action: {event: string, data?: any}) {
    this.event.next(action);
  }
}
