import { TestBed } from '@angular/core/testing';

import { AdherentQueryService } from './adherent-query.service';

describe('ClientQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdherentQueryService = TestBed.get(AdherentQueryService);
    expect(service).toBeTruthy();
  });
});
