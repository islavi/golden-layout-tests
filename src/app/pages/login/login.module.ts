import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { UsersService } from '@services/users.service';
import { AlertService } from '@services/alert.service';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from '@app/app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  exports: [],
  declarations: [
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    UsersService,
    AlertService
  ]
})
export class LoginModule { }
