import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;
  // https://github.com/valor-software/ngx-bootstrap/issues/540#issuecomment-272884775
  isCollapsed = true;

  constructor(public oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit() {
      this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
          (isAuthorized: boolean) => {
              this.isAuthorized = isAuthorized;
          });
  }

  ngOnDestroy(): void {
      this.isAuthorizedSubscription.unsubscribe();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  login() {
      this.oidcSecurityService.authorize();
  }

  refreshSession() {
      this.oidcSecurityService.authorize();
  }

  logout() {
      this.oidcSecurityService.logoff();
  }
}
