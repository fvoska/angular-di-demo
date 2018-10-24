import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WINDOW } from './injection-tokens';
import { CalendarModule } from './components/calendar/calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot(),
  ],
  providers: [
    {
      provide: 'fooBar',
      useValue: 'bar',
    },

    {
      provide: 'random',
      useFactory: () => {
        return Math.random();
      }
    },

    {
      provide: WINDOW,
      useValue: window,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
