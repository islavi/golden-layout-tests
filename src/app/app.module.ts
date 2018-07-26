import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { GoldenLayoutModule } from '@core/index';
import { goldenLayoutConfig } from './configuration/layout.config';
import { VesselsMapsModule } from '@components/vessels-map/vessels-map.module';
import { UsersModule } from '@components/users/users.module';
import { ServicesModule } from '@app/services/services.module';
import { AppComponent } from '@app/app.component';
import { routing } from '@app/app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { LoginModule } from '@pages/login/login.module';
import { RegisterModule } from '@pages/register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VesselsMapsModule,
    ServicesModule.forRoot(),
    UsersModule,
    LoginModule,
    RegisterModule,
    routing,
    GoldenLayoutModule.forRoot(goldenLayoutConfig),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
