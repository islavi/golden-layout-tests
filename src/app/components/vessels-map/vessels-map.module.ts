import { NgModule } from '@angular/core';
import { InfoSidebarComponent } from './components/info-sidebar/info-sidebar.component';
import { VesselInfoComponent } from './components/vessel-info/vessel-info.component';
import { PipesModule } from '../../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { VesselsMapComponent } from './vessels-map.component';
import { EventsService } from '@services/events.service';
import { VesselService } from '@services/vessel.service';
import { UIComponentsModule } from '@ui/ui.components.module';

@NgModule({
  imports: [
    UIComponentsModule,
    PipesModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
  ],
  exports: [],
  declarations: [
    VesselsMapComponent,
    VesselInfoComponent,
    InfoSidebarComponent
  ],
  entryComponents: [
    VesselsMapComponent,
    VesselInfoComponent
  ],
  providers: [
    EventsService,
    VesselService
  ]
})
export class VesselsMapsModule { }
