import { EventEmitter } from '@angular/core';

export interface ICalendarComponent {
  date: Date;
  eventBooked: EventEmitter<void>;
}
