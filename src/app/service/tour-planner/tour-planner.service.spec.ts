import { TestBed } from '@angular/core/testing';

import { TourPlannerService } from './tour-planner.service';

describe('TourPlannerService', () => {
  let service: TourPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
