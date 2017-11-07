import { TestBed, inject } from '@angular/core/testing';

import { WrappedOidcSecurityService } from './wrapped-oidc-security.service';

describe('WrappedOidcSecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WrappedOidcSecurityService]
    });
  });

  it('should be created', inject([WrappedOidcSecurityService], (service: WrappedOidcSecurityService) => {
    expect(service).toBeTruthy();
  }));
});
