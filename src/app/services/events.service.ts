import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventsService {

    MAP_VESSEL_SELECTED_EVENT;

    constructor() {
        this.initEvents();
    }

    initEvents = (): void => {
        this.MAP_VESSEL_SELECTED_EVENT = new EventEmitter();
    }

}
