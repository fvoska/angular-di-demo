import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarService } from './calendar.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class CalendarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CalendarModule,
      providers: [
        CalendarService,
      ]
    };
  }
}
