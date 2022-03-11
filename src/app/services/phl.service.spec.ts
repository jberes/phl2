import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PhlService } from './phl.service';

describe('PhlService', () => {
  let service: PhlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PhlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
