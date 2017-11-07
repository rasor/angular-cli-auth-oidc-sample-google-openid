import { WrappedOidcSecurityService } from './services/wrapped-oidc-security.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration } from 'angular-auth-oidc-client';
import { AutoLoginComponent } from './auto-login/auto-login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(),
  ],
  providers: [
    OidcSecurityService,
    WrappedOidcSecurityService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  // constructor(public wrappedOidcSecurityService: WrappedOidcSecurityService) {
  // }
  constructor(public oidcSecurityService: OidcSecurityService) {

    const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
    // OIDC provider - verify with reading openid-configuration
    // https://accounts.google.com/.well-known/openid-configuration
    openIDImplicitFlowConfiguration.stsServer = 'https://accounts.google.com';
    openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200'; // ng serve
    openIDImplicitFlowConfiguration.client_id =
      '347457883359-64didimqg2m9ci0o007lng94uf01pkqv.apps.googleusercontent.com'; // rasor's public
    openIDImplicitFlowConfiguration.response_type = 'id_token token';
    openIDImplicitFlowConfiguration.scope = 'openid email profile'; // ng requests this info
    openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:4200/Unauthorized';
    openIDImplicitFlowConfiguration.post_login_route = '/home';
    openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
    openIDImplicitFlowConfiguration.unauthorized_route = '/Unauthorized';
    openIDImplicitFlowConfiguration.trigger_authorization_result_event = true;
    openIDImplicitFlowConfiguration.log_console_warning_active = true;
    openIDImplicitFlowConfiguration.log_console_debug_active = true;
    openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 20;
    openIDImplicitFlowConfiguration.override_well_known_configuration = false;
    openIDImplicitFlowConfiguration.override_well_known_configuration_url = 'http://localhost:4200/assets/wellknownconfiguration.json';

    this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration);
  }
}
