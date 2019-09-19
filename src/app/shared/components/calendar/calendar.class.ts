class CalendarValue {
date: any;

constructor(date?: string) {
    this.date = date ? new Date(date) : new Date();
}

getMonthNumberOfDays() {
    return this.getMonthLastDay().getDate();
}

getMonthDaysArray() {
    const numberOfDays = this.getMonthNumberOfDays();
    return Array.from({length: numberOfDays}, (v, k) => k + 1); // [...Array(numberOfDays).keys()];
}

getMonthLastDay() {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
}

getMonthFirstDay() {
    return new Date(this.date.getFullYear(), this.date.getMonth());
}

getPreviousMonth() {
    return new Date(this.date.getFullYear(), this.date.getMonth(), 0);
}

getPreviousMonthPadding() {
    const length = this.getMonthFirstDay().getDay();
    const previousMonthEnd = this.getPreviousMonth().getDate();
    return Array(length).fill(0).map( (e, i) => previousMonthEnd - ((length - 1) - i) );
}

getNextMonthPadding() {
    const length = 6 - this.getMonthLastDay().getDay();
    return Array(length).fill(0).map( (e, i) => i + 1 );
}

today() {
    return new Date();
}
}

class CalendarControl extends CalendarValue {
constructor(date?: string) {
    super(date);
}

gotoNextMonth() {
    const now = this.date;
    let nextMonth;
    if (now.getMonth() === 11) {
    nextMonth = new Date(now.getFullYear() + 1, 0, 1);
    } else {
    nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }
    this.date = nextMonth;
}

gotoPreviousMonth() {
    const now = this.date;
    let prevMonth;
    if (now.getMonth() === 0) {
    prevMonth = new Date(now.getFullYear() - 1, 11, 1);
    } else {
    prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    }
    this.date = prevMonth;
}
}

export class Calendar extends CalendarControl {
    constructor(date?: string) {
        super(date);
    }
}
