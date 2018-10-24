import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CalendarService } from './calendar-service/calendar.service';
import { ICalendarComponent } from './calendar.component.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements ICalendarComponent {
  @Input() public date: Date;
  @Output() public eventBooked: EventEmitter<void> = new EventEmitter();
  public eventName: string;

  constructor(private calendarService: CalendarService) { }

  public onBook(): void {
    const bookingResult = this.calendarService.bookEvent(this.eventName);

    if (bookingResult) {
      this.eventBooked.emit();
    }
  }
}
