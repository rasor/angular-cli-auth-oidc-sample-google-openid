import { AppComponentOidcSecurityBase } from './app-component-oidc-security-base';
import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppComponentOidcSecurityBase  {
  title = 'app';

  constructor(public oidcSecurityService: OidcSecurityService, public router: Router) {
    // handle auto-login in base
    super(oidcSecurityService, router);
  }
}
