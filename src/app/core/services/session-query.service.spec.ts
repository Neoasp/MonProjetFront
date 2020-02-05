import { TestBed } from '@angular/core/testing';

import { SessionQueryService } from './session-query.service';

describe('SessionQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionQueryService = TestBed.get(SessionQueryService);
    expect(service).toBeTruthy();
  });
});
