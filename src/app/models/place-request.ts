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
        this.pictureUrl = 'https://www.fri.ch/site_2015/wp-content/plugins/ajax-search-pro/img/default.jpg'; 
        this.location = new GeoJsonPoint(); 
    }
}

