import { TestBed } from '@angular/core/testing';

import { GetclubdetailsService } from './getclubdetails.service';

describe('GetclubdetailsService', () => {
  let service: GetclubdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetclubdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
