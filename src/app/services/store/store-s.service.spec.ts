import { TestBed } from '@angular/core/testing';

import { StoreSService } from './store-s.service';

describe('StoreSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreSService = TestBed.get(StoreSService);
    expect(service).toBeTruthy();
  });
});
