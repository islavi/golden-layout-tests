import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { GoldenLayoutModule, GoldenLayoutService, GoldenLayoutConfiguration } from '@core/index';
import { goldenLayoutConfig } from './configuration/layout.config';
import * as $ from 'jquery';
import { TestPanelComponent } from '@app/components/test-panel.component';
import { VesselsMapsModule } from '@components/vessels-map/vessels-map.module';
import { UsersModule } from '@components/users/users.module';
import { ServicesModule } from '@app/services/services.module';
import { UsersService } from '@app/services';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';

@Component({
  template: `<div class="spawn-new"></div><golden-layout-root></golden-layout-root>`,
  selector: `app-root`,
})
export class RootComponent {
  // test delayed component construction
  constructor(private srv: GoldenLayoutService) {
    setTimeout(() => {
      srv.createNewComponent(srv.getRegisteredComponents()[1]);
    }, 1000);
  }

}

@NgModule({
  declarations: [
    RootComponent,
    TestPanelComponent
  ],
  entryComponents: [
    TestPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VesselsMapsModule,
    ServicesModule.forRoot(),
    UsersModule,
    GoldenLayoutModule.forRoot(goldenLayoutConfig),
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
