import { Directive, Input, ElementRef, Injector, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, ControlContainer } from '@angular/forms'; 
import { CalendarService } from '../components/calendar/calendar.service';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit{

  @Input() formControlName?: string;
  private form: FormGroup;
  private control: FormControl;
  private controlContainer: ControlContainer;

  constructor(
    private elRef: ElementRef,
    private injector: Injector,
    private calendarService: CalendarService
  ) { }

  ngOnInit(): void {
    if (this.formControlName) {
      this.controlContainer = this.injector.get<ControlContainer>(ControlContainer as any);
      this.form = this.controlContainer.control as FormGroup;
      this.control = this.form.get(this.formControlName) as FormControl;
    }
  }

  @HostListener('click', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      this.calendarService.dispatch({
        event: 'DATE_PICKER_INPUT_CLICKED',
        data: this.formControlName ? this.control : this.elRef.nativeElement
      });
  }

}
