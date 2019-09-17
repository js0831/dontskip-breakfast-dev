import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  key = '';
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  search() {
    this.searchService.dispatch({
      event: 'ON_SEARCH',
      data: this.key
    });
  }
}
