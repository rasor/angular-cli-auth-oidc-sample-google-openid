// https://damienbod.com/2017/09/26/auto-redirect-to-an-sts-server-in-an-angular-app-using-oidc-implicit-flow/
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService, AuthorizationResult} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  // https://github.com/damienbod/angular-auth-oidc-sample-google-openid/blob/master/src/AngularClient/angularApp/app/app.component.ts
  constructor(public oidcSecurityService: OidcSecurityService, private router: Router)
  {
    if (this.oidcSecurityService.moduleSetup) {
        this.onOidcModuleSetup();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
          this.onOidcModuleSetup();
      });
    }

    this.oidcSecurityService.onAuthorizationResult.subscribe(
      (authorizationResult: AuthorizationResult) => {
          this.onAuthorizationResultComplete(authorizationResult);
      }
    );
  }

  ngOnDestroy(): void {
    this.oidcSecurityService.onModuleSetup.unsubscribe();
  }

  login() {
    console.log('start login');
    this.oidcSecurityService.authorize();
  }

  refreshSession() {
      console.log('start refreshSession');
      this.oidcSecurityService.authorize();
  }

  logout() {
      console.log('start logoff');
      this.oidcSecurityService.logoff();
  }

  private onOidcModuleSetup() {
    if (window.location.hash) {
      this.oidcSecurityService.authorizedCallback();
    } else {
      if ('/autologin' !== window.location.pathname) {
          this.write('redirect', window.location.pathname);
      }
      console.log('AppComponent:onModuleSetup');
      this.oidcSecurityService.getIsAuthorized().subscribe((authorized: boolean) => {
          if (!authorized) {
              this.router.navigate(['/autologin']);
          }
      });
    }
  }

  private onAuthorizationResultComplete(authorizationResult: AuthorizationResult) {
    console.log('AppComponent:onAuthorizationResultComplete');
    const path = this.read('redirect');
    if (authorizationResult === AuthorizationResult.authorized) {
        this.router.navigate([path]);
    } else {
        this.router.navigate(['/Unauthorized']);
    }
  }

  private read(key: string): any {
    const data = localStorage.getItem(key);
    if (data != null) {
        return JSON.parse(data);
    }

    return;
  }

  private write(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  title = 'app';
}
