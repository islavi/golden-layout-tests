import { Component, OnDestroy} from '@angular/core';
import { Vessel } from '@models/vessel.model';
import { EventsService } from '@services/events.service';
import { VesselService } from '@services/vessel.service';

@Component({
  selector: 'vessel-info',
  styleUrls: ['./vessel-info.component.scss'],
  templateUrl: './vessel-info.component.html',
})
export class VesselInfoComponent implements OnDestroy {

  public vessel: Vessel;

  constructor(private eventsService: EventsService,
              private vesselService: VesselService) {

    this.eventsService.MAP_VESSEL_SELECTED_EVENT.subscribe(vesselId => {
      this.getVesselData(vesselId);
    });
  }

  getVesselData = (vesselId: string): any => {
    this.vesselService.getVessel(vesselId).then(
      (vessel: Vessel) => {
        this.vessel = vessel;
      });
  }

  ngOnDestroy() {
    this.eventsService.MAP_VESSEL_SELECTED_EVENT.unsubscribe();
  }

}
