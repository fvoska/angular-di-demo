import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandyComponent } from './randy.component';
import { CalendarTestingModule } from '../../components/calendar/calendar.testing.module';
import { SomeService } from '../../service/some-service/some-service.service';
import { BarModule } from '../../components/bar/bar.module';

describe('RandyComponent', () => {
  let component: RandyComponent;
  let fixture: ComponentFixture<RandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BarModule,
        CalendarTestingModule,
      ],
      declarations: [
        RandyComponent,
      ],
      providers: [
        { provide: SomeService, useValue: { } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
