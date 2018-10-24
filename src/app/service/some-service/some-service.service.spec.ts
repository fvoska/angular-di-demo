import { TestBed } from '@angular/core/testing';

import { SomeService } from './some-service.service';

describe('SomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SomeService],
  }));

  it('should be created', () => {
    const service: SomeService = TestBed.get(SomeService);
    expect(service).toBeTruthy();
  });
});
