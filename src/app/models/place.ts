import { GeoJsonPoint } from './geo-json-point';

export class Place {
    id: string;
    href: string;
    name: string;
    description: string;
    location:GeoJsonPoint; 
    tripId: string;
    tripHref: string;
    pictureUrloptionnel: string;
    createdAt: string;
    updatedAt: string;
}
