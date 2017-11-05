// https://damienbod.com/2017/09/26/auto-redirect-to-an-sts-server-in-an-angular-app-using-oidc-implicit-flow/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-auto-login',
  templateUrl: './auto-login.component.html',
  styleUrls: ['./auto-login.component.css']
})
export class AutoLoginComponent implements OnInit, OnDestroy {
  lang: any;

  // https://github.com/damienbod/angular-auth-oidc-sample-google-openid/blob/master/src/AngularClient/angularApp/app/auto-login/auto-login.component.ts
  constructor(public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.onModuleSetup.subscribe(() => { this.onModuleSetup(); });
  }

  ngOnInit() {
    if (this.oidcSecurityService.moduleSetup) {
        this.onModuleSetup();
    }
  }

  ngOnDestroy(): void {
    this.oidcSecurityService.onModuleSetup.unsubscribe();
  }

  private onModuleSetup() {
    this.oidcSecurityService.authorize();
  }
}
