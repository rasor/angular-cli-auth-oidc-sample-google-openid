// https://github.com/damienbod/angular-auth-oidc-sample-google-openid/blob/master/src/AngularClient/angularApp/app/app.routes.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ForbiddenComponent } from './forbidden/forbidden.component';
// import { HomeComponent } from './home/home.component';
// import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AutoLoginComponent } from './auto-login/auto-login.component';

const routes: Routes = [
//  { path: '', component: HomeComponent },
//  { path: 'home', component: HomeComponent },
  { path: 'autologin', component: AutoLoginComponent },
//  { path: 'Forbidden', component: ForbiddenComponent },
//  { path: 'Unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
