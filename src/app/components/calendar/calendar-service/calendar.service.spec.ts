import { TestBed } from '@angular/core/testing';
import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService],
    });

    service = TestBed.get(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should book an event if booking data is valid', () => {
    const bookingResult = service.bookEvent({ foo: 'bar' });

    expect(bookingResult).toBeTruthy();
  });

  it('should not book an event if booking data is invalid', () => {
    const bookingResult = service.bookEvent(null);

    expect(bookingResult).toBeFalsy();
  });
});
