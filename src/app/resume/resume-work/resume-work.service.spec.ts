import { TestBed } from '@angular/core/testing';

import { ResumeWorkService } from './resume-work.service';

describe('ResumeWorkService', () => {
  let service: ResumeWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
