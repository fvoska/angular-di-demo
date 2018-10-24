import { Injectable } from '@angular/core';
import { SomeModule } from '../../shared-modules/some.module';

@Injectable({
  providedIn: SomeModule,
})
export class SomeService {
  public someValue = 42;
}
