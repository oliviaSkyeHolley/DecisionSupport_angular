import { TestBed } from '@angular/core/testing';

import { DecisionSupportService } from '../decision-support.service';

describe('DecisionSupportService', () => {
  let service: DecisionSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecisionSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
