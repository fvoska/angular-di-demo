import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class BeverageService {
  public availableDrinks$: BehaviorSubject<number> = new BehaviorSubject(4);

  public drink(): void {
    const availableDrinks = this.availableDrinks$.value;

    if (availableDrinks) {
      this.availableDrinks$.next(availableDrinks - 1);
    } else {
      throw new Error('No drinks left!');
    }
  }
}
