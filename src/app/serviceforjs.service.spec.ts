import { TestBed } from '@angular/core/testing';

import { ServiceforjsService } from './serviceforjs.service';

describe('ServiceforjsService', () => {
  let service: ServiceforjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceforjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
