import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

  @Input() readonly = false;

  constructor() { }

  ngOnInit() {
  }

}
