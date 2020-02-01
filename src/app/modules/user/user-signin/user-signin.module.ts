import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSigninRoutingModule } from './user-signin-routing.module';
import { UserSigninComponent } from './user-signin.component';


@NgModule({
  declarations: [UserSigninComponent],
  imports: [
    CommonModule,
    UserSigninRoutingModule
  ]
})
export class UserSigninModule { }
