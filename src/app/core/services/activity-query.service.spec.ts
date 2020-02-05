import { TestBed } from '@angular/core/testing';

import { ActivityQueryService } from './activity-query.service';

describe('ActivityQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityQueryService = TestBed.get(ActivityQueryService);
    expect(service).toBeTruthy();
  });
});
