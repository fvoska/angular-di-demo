
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarTestingComponent } from './calendar.testing.component';
import { CalendarTestingService } from '../calendar-service/calendar.testing.service';
import { CalendarService } from '../calendar-service/calendar.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CalendarTestingComponent],
  exports: [CalendarTestingComponent],
  providers: [{
    provide: CalendarService,
    useClass: CalendarTestingService
  }]
})
export class CalendarTestingModule { }
