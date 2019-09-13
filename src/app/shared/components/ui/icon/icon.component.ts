import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() size?: string;
  @Input() type = 'svg';

  classes: string;
  xlinkHREF: string;


  constructor() { }

  ngOnInit() {
    this.xlinkHREF = `assets/symbol-defs.svg#icon-${this.name}`;
    this.classes = `icon icon--${this.size || 'm'}`;
  }

}
