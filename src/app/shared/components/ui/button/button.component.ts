import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon?: string;
  @Input() iconType = 'svg';
  @Input() size?: string;
  @Input() style?: any;
  @Input() type?: string;

  constructor() { }

  ngOnInit() {
    this.size = this.size || 'm';
  }

}
