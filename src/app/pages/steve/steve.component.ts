import { Component } from '@angular/core';
import { SomeService } from '../../service/some-service/some-service.service';

@Component({
  selector: 'app-steve',
  templateUrl: './steve.component.html',
  styleUrls: ['./steve.component.scss']
})
export class SteveComponent {
  constructor(
    public someService: SomeService,
  ) { }
}
