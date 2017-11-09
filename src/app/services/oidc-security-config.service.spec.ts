import { TestBed, inject } from '@angular/core/testing';

import { OidcSecurityConfigService } from './oidc-security-config.service';

describe('OidcSecurityConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OidcSecurityConfigService]
    });
  });

  it('should be created', inject([OidcSecurityConfigService], (service: OidcSecurityConfigService) => {
    expect(service).toBeTruthy();
  }));
});
