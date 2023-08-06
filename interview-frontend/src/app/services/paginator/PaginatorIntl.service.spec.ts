import { TestBed } from '@angular/core/testing';

import { PaginatorIntl } from './PaginatorIntl.service';

describe('PaginatorService', () => {
  let service: PaginatorIntl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorIntl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
