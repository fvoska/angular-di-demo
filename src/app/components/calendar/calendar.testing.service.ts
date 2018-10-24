import { ICalendarService } from './calendar.service.interface';

export class CalendarTestingService implements ICalendarService {
  bookEvent(_bookingData: any): boolean {
    throw new Error('Method not implemented.');
  }
}
