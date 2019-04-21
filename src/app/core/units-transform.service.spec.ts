import { TestBed } from '@angular/core/testing';

import { UnitsTransformService } from './units-transform.service';

describe('UnitsTransformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitsTransformService = TestBed.get(UnitsTransformService);
    expect(service).toBeTruthy();
  });
});
