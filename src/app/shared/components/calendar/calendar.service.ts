import { Injectable } from '@angular/core';
import { EventService } from '../../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService extends EventService {

  constructor() {
    super();
  }
}
