import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SteveComponent } from './steve.component';
import { CalendarTestingModule } from '../../components/calendar/calendar.testing.module';
import { SomeService } from '../../service/some-service/some-service.service';
import { BarModule } from '../../components/bar/bar.module';

describe('SteveComponent', () => {
  let component: SteveComponent;
  let fixture: ComponentFixture<SteveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BarModule,
        CalendarTestingModule,
      ],
      declarations: [
        SteveComponent
      ],
      providers: [
        { provide: SomeService, useValue: { } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
