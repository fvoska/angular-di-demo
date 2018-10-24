import { Injectable } from '@angular/core';
import { ICalendarService } from './calendar.service.interface';

@Injectable()
export class CalendarService implements ICalendarService {
  public bookEvent(bookingData: any): boolean {
    return bookingData ? true : false;
  }
}
