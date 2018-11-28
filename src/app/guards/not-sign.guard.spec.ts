import { TestBed, async, inject } from '@angular/core/testing';

import { NotSignGuard } from './not-sign.guard';

describe('NotSignGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotSignGuard]
    });
  });

  it('should ...', inject([NotSignGuard], (guard: NotSignGuard) => {
    expect(guard).toBeTruthy();
  }));
});
