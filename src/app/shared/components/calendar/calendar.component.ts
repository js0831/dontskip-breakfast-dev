import { Component, OnInit } from '@angular/core';
import { Calendar } from './calendar.class';
import { CalendarService } from './calendar.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  open = false;
  hidden = true;
  calendar: Calendar;
  today = new Date();
  selectedDate = null;
  daysInitials = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  datePickerInput: any;
  private datePipe: DatePipe = new DatePipe('en-US');

  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {

    this.calendarService.listen.subscribe( (x: any) => {

      this.datePickerInput = x.data;
      this.calendar = new Calendar(this.datePickerInput.value);
      this.open = true;
      setTimeout( () => {
        this.hidden = false;
      });

    });
  }

  previous() {
    this.selectedDate = null;
    this.calendar.gotoPreviousMonth();
  }

  next() {
    this.selectedDate = null;
    this.calendar.gotoNextMonth();
  }

  isToday(date: any) {
    const d1 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    const d2 = new Date(this.calendar.date.getFullYear(), this.calendar.date.getMonth(), date);
    return d2.getTime() === d1.getTime();
  }

  isSelected(date: any) {
    if (!this.selectedDate) {
      return false;
    }
    const d = this.calendar.date;
    const d1 = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
    const d2 = new Date(d.getFullYear(), d.getMonth(), date);
    return d2.getTime() === d1.getTime();
  }

  selectDate(day: number) {
    this.selectedDate = new Date(this.calendar.date.getFullYear(), this.calendar.date.getMonth(), day);
  }

  cancel() {
    this.reset();
  }

  ok() {
    if (!this.selectedDate) {
      return;
    }
    this.datePickerInput.value = this.datePipe.transform(this.selectedDate, 'MM-dd-yyyy');
    this.reset();
  }

  private reset() {
    this.hidden = true;
    setTimeout( () => {
      this.open = false;
      this.calendar = null;
      this.selectedDate = null;
    }, 250);
  }
}


