import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteveRoutingModule } from './steve-routing.module';
import { SteveComponent } from './steve.component';
import { BarModule } from '../../components/bar/bar.module';
import { SomeModule } from '../../shared-modules/some.module';
// import { BeverageService } from '../../service/beverage/beverage.service';

@NgModule({
  imports: [
    CommonModule,
    SteveRoutingModule,
    BarModule,
    SomeModule,
  ],
  declarations: [SteveComponent],
  providers: [
    // BeverageService,
  ]
})
export class SteveModule { }
