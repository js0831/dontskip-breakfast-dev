import { Component, OnInit } from '@angular/core';
import { Popup } from 'src/app/shared/components/popup/popup.class';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  credits = [
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    },
    {
      delivered: '08-22-2019',
      ordered: '08-10-2019',
      food: 'Tapsilog',
      price: '50.00'
    }
  ];
  menuPopup: Popup;

  constructor() { }

  ngOnInit() {
    this.menuPopup = new Popup('Tapsilog');

    setTimeout(x => {
      this.menuPopup.open();
    }, 1000);
  }

}
