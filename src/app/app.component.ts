import { Component, Inject, Injector } from '@angular/core';
import { WINDOW } from './injection-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private window2: Window;
  constructor(
    @Inject('fooBar') public foo: string,
    @Inject('random') public random: number,
    @Inject(WINDOW) public window: Window,
    injector: Injector,
  ) {
    this.window2 = injector.get(WINDOW);

    console.log(`Are windows the same? ${this.window === this.window2}`);
  }

  public startAnimation(): void {
    this.window.requestAnimationFrame(() => {
      console.log('Animation started');
    });
  }
}
