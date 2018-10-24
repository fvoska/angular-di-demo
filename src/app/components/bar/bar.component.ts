import { Component } from '@angular/core';
import { BeverageService } from '../../service/beverage/beverage.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  constructor(public beverage: BeverageService) { }

  public onDrink(): void {
    try {
      this.beverage.drink();
    } catch (e) {
      alert(e);
    }
  }
}
