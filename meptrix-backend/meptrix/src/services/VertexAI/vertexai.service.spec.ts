import { TestBed } from '@angular/core/testing';

import { VertexaiService } from './vertexai.service';

describe('VertexaiService', () => {
  let service: VertexaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VertexaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
