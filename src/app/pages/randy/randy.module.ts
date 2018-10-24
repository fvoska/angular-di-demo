import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandyRoutingModule } from './randy-routing.module';
import { RandyComponent } from './randy.component';
import { BarModule } from '../../components/bar/bar.module';
import { SomeModule } from '../../shared-modules/some.module';
import { CalendarModule } from '../../components/calendar/calendar.module';
// import { BeverageService } from '../../service/beverage/beverage.service';

@NgModule({
  imports: [
    CommonModule,
    RandyRoutingModule,
    BarModule,
    CalendarModule,
  ],
  declarations: [RandyComponent],
  providers: [
    // BeverageService,
  ]
})
export class RandyModule { }
