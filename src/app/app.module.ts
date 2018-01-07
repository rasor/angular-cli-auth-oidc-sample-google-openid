import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import { ChapterService } from './services/chapter.service';
import { OidcSecurityConfigService } from './services/oidc-security-config.service';
import { AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration } from 'angular-auth-oidc-client';
import { AutoLoginComponent } from './auto-login/auto-login.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoLoginComponent,
    HomeComponent,
    NavigationComponent,
    ForbiddenComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    AuthModule.forRoot(),
  ],
  providers: [
    OidcSecurityService,
    OidcSecurityConfigService,
    ChapterService
    // Http
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  // handle security config in service
  constructor(public oidcSecurityConfigService: OidcSecurityConfigService) {
  }
}
