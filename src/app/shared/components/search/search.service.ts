import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventService } from '../../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends EventService {

  constructor() {
    super();
  }


}
