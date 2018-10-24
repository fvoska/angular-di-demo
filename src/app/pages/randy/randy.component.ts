import { Component, Optional } from '@angular/core';
import { SomeService } from '../../service/some-service/some-service.service';

@Component({
  selector: 'app-randy',
  templateUrl: './randy.component.html',
  styleUrls: ['./randy.component.scss']
})
export class RandyComponent {
  constructor(
    @Optional() public someService: SomeService,
  ) { }

  public onEventBooked(): void {
    alert('Event Booked');
  }
}
