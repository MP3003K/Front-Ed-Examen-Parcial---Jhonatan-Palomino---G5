import { TestBed } from '@angular/core/testing';

import { CU2Service } from './cu2.service';

describe('CU2Service', () => {
  let service: CU2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CU2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
