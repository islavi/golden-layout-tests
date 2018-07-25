import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'vesselIcon' })
export class VesselIconPipe implements PipeTransform {

    transform(_vesselType: string, classification: string): string {
        const baseVesselsUrl = '/assets/map/vessel-types/';
        let vesselIcon = 'default-vessel.svg';
        if (_vesselType) {
            const vesselType = _vesselType.toLowerCase();
            switch (true) {
                case vesselType === 'cargo':
                    vesselIcon = 'cargo.svg';
                    break;
                case vesselType === 'fishing':
                    vesselIcon = 'fishing.svg';
                    break;
                case vesselType === 'tug':
                    vesselIcon = 'tug.svg';
                    break;
                case vesselType === 'passenger':
                    vesselIcon = 'passenger.svg';
                    break;
                case vesselType === 'tanker':
                    vesselIcon = 'tanker.svg';
                    break;
                case vesselType === 'other':
                    vesselIcon = 'other.svg';
                    break;
            }
        } else {
            switch (true) {
                case classification === 'yacht':
                    vesselIcon = 'yacht.svg';
                    break;
            }
        }
        return baseVesselsUrl + vesselIcon;
    }

}
