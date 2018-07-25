import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersService } from '@services/users.service';
import { UIComponentsModule } from '@ui/ui.components.module';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './users.routes';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    UIComponentsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [],
  declarations: [
    UsersComponent,
    CreateUserComponent
  ],
  entryComponents: [
    UsersComponent,
    CreateUserComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
