

export class GeoJsonPoint {
    type: string;
    coordinates = []; 

    constructor(){
        this.type = 'Point'; 
        this.coordinates = ['6.938473', '46.997597']; 
    }
}
