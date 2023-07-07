import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowPasswordEyeComponent } from './show-password-eye/show-password-eye.component';
import { CommunitiesListComponent } from '../components/communities-list/communities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAvatarComponent,
    HeaderComponent,
    CommunitiesListComponent,
    SignInPageComponent,
    ShowPasswordEyeComponent
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
