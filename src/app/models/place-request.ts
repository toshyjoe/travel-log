import { GeoJsonPoint } from './geo-json-point';

export class PlaceRequest {
    name: string; 
    description: string; 
    location: GeoJsonPoint; 
    tripHref: string; 
    tripId: string; 
    pictureUrl: string; 

    
    constructor() {
        this.name = ''; 
        this.description = ''; 
        this.pictureUrl = ''; 
        this.location = new GeoJsonPoint(); 
    }
}

