

export class GeoJsonPoint {
    type: string;
    coordinates = []; 

    constructor(){
        this.type = 'Point'; 
        this.coordinates = ['3', '4']; 
    }
}
