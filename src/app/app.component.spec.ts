import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WINDOW } from './injection-tokens';
import { componentFactoryName } from '@angular/compiler';

const mockWindow = {
  requestAnimationFrame(cb: Function) {
    setTimeout(cb);
  }
};

describe('AppComponent', () => {
  let app: AppComponent;
  let windowInstance: Window;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: 'fooBar',
          useValue: 'testing bar'
        },

        {
          provide: 'random',
          useValue: 0.5,
        },

        {
          provide: WINDOW,
          useValue: mockWindow,
        },
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    windowInstance = TestBed.get(WINDOW);
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should run the animation in animation frame', () => {
    spyOn(windowInstance, 'requestAnimationFrame');

    expect(windowInstance.requestAnimationFrame).not.toHaveBeenCalled();

    app.startAnimation();

    expect(windowInstance.requestAnimationFrame).toHaveBeenCalled();
  });
});
