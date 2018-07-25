export class VesselsResponse {
    vessels: Vessel[];
    total: number;
    date: string;
    geoJSON: JSON;
}

export class Vessel {
    id: string;
    name: string;
    mmsi: number;
    imo: number;
    flag: string;
    class: string;
    width: number;
    length: number;
    ship_type: string;
    call_sign: string;
    updated_at: number;
    person_capacity: number;
    last_known_position: VesselLastKnownPosition;
    predicted_position: VesselPredictedPosition;
    gross_tonnage: number;
    lifeboats: number;
    individual_classification: string;
    general_classification: string;
    // map_data: VesselMapData;
}

// export enum VesselIndividualClassification {
//     'Bulk Carrier', 'Passenger Ship', 'Cargo Ship', 'Buoy Ship'
// }

export class VesselMapData {
    mapImage: string;
    image: string;
}

export class VesselLastKnownPosition {
    timestamp: number;
    geometry: VesselGeometry;
    heading: number;
    speed: number;
    rot: number;
    accuracy: string;
    collection_type: string;
    draught: string;
    maneuver: number;
    course: number;
}

export class VesselGeometry {
    coordinates: number[];
}

export class VesselPredictedPosition {
    timestamp: number;
    geometry: VesselGeometry;
    speed: number;
    course: number;
    confidence_radius: number;
}
