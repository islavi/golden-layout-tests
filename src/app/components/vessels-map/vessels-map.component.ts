import { Component, Inject } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { EventsService } from '@services/events.service';
import { VesselService } from '@services/vessel.service';
import { Vessel, VesselsResponse } from '@models/vessel.model';
import { Const } from '@app/const';
import { GoldenLayoutComponentState, GlOnResize, GlOnHide, GlOnShow, GlOnTab, GoldenLayoutContainer } from '@core/index';
import * as GoldenLayout from 'golden-layout';

@Component({
  selector: 'vessels-map',
  styleUrls: [ './vessels-map.component.scss' ],
  templateUrl: './vessels-map.component.html',
})
export class VesselsMapComponent implements GlOnResize, GlOnHide, GlOnShow, GlOnTab {

  zoom: number; // google maps zoom level
  mapLat: number; // latitude
  mapLng: number; // longitude
  vessels: Vessel[]; // Markers

  selectedVesselId: string;

  constructor(private eventsService: EventsService,
              private vesselService: VesselService,
              @Inject(GoldenLayoutComponentState) private state: any,
              @Inject(GoldenLayoutContainer) private container: GoldenLayout.Container) {
    this.initDefaults();
    this.initVessels();
  }

  initDefaults = (): void => {
    this.zoom = Const.mapZoom;
    this.mapLat = Const.mapLat;
    this.mapLng = Const.mapLng;
  }

  initVessels = (): void => {
    this.vesselService.getVessels().then((vesselsResponse: VesselsResponse) => {
      this.vessels = vesselsResponse.vessels;
    });
  }

  showInfoWindow = (vesselId: string, infoWindow: InfoWindow): void => {
    infoWindow.open();
  }

  hideInfoWindow = (vesselId: string, infoWindow: InfoWindow): void => {
    infoWindow.close();
  }

  showVesselInfo = (label: string, index: number): void => {
    this.selectedVesselId = index.toString();
    this.eventsService.MAP_VESSEL_SELECTED_EVENT.emit(this.selectedVesselId);
  }

  mapClicked = ($event: MouseEvent): void => {
    // console.log(`Map clicked: ${event}`)
  }

  public onInput(e: Event): void {

    this.container.extendState({
      value: (<HTMLInputElement>e.target).value
    });

    console.log('state saved.');
  }

  public glOnResize(): void {
    console.log('Resizing!');
  }

  public glOnShow(): void {
    console.log('Showing!');
  }

  public glOnHide(): void {
    console.log('Hiding!');
  }

  public glOnTab(): void {
    console.log('Tab shown!');
  }

}
