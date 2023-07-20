import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowPasswordEyeComponent } from './components/show-password-eye/show-password-eye.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CommunitiesListComponent } from './components/communities-list/communities-list.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { RowIsPressedDirective } from './sharing/directives/row-is-pressed.directive';
import { LoginMainPageComponent } from './components/login-main-page/login-main-page.component';
import { AmityLogoComponent } from './components/amity-logo/amity-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAvatarComponent,
    HeaderComponent,
    CommunitiesListComponent,
    SignInPageComponent,
    ShowPasswordEyeComponent,
    ErrorMessageComponent,
    LoginMainPageComponent,
    MembersListComponent,
    RowIsPressedDirective,
    AmityLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
