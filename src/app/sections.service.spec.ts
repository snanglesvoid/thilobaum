import { TestBed } from '@angular/core/testing';

import { SectionsService } from './sections.service';

describe('SectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionsService = TestBed.get(SectionsService);
    expect(service).toBeTruthy();
  });
});
