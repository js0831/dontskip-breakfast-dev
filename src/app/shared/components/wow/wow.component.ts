import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wow',
  templateUrl: './wow.component.html',
  styleUrls: ['./wow.component.scss']
})
export class WowComponent implements OnInit, OnDestroy {

  private wows = [
    {
      words: 'Not every day is Good. But there is something good in every day.',
      by: 'Anonymous'
    },
    {
      words: 'Ang pag gawa ng MASAMA ay hindi mag bubunga ng MABUTI',
      by: 'Daniel Razon'
    }
  ];
  private activeWowIndex = 0;
  private wowTimer: any;

  constructor() { }

  ngOnInit() {
    this.wowTimer = setInterval( x => {
      this.activeWowIndex += 1;
      if (this.activeWowIndex > this.wows.length - 1) {
        this.activeWowIndex = 0;
      }
    }, 60000);
  }

  ngOnDestroy() {
    clearInterval(this.wowTimer);
  }

  get wordofwisdom() {
    return this.wows[this.activeWowIndex];
  }
}
