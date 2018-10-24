import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ICalendarComponent } from '../calendar.component.interface';

@Component({
  selector: 'app-calendar',
  template: 'calendar testing component',
})
export class CalendarTestingComponent implements ICalendarComponent {
  @Input() public date: Date;
  @Output() public eventBooked: EventEmitter<void> = new EventEmitter();
}
