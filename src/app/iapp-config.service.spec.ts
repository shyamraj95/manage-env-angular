import { TestBed } from '@angular/core/testing';

import { IAppConfigService } from './iapp-config.service';

describe('IAppConfigService', () => {
  let service: IAppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAppConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
