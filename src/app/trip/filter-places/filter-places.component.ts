import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { MatTableDataSource } from '@angular/material/table'; 
import { SharedService } from 'src/app/api/services/shared.service';
import { PlaceService } from 'src/app/api/services/place.service';
import { Place } from 'src/app/models/place';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/security/auth.service';
import { filter, map, startWith } from 'rxjs/operators';

export interface PlaceInterface {
  name: string; 
}

@Component({
  selector: 'app-filter-places',
  templateUrl: './filter-places.component.html',
  styleUrls: ['./filter-places.component.scss']
})
export class FilterPlacesComponent implements OnInit {


  @Input() selectedTrip: Trip; 
  currentUser : User; 
  displayedColumns: string[] = ['name']; 
  dataSource : MatTableDataSource<any>; 
  placeNames: String[]; 
  isTripOfUser : boolean; 
  

  constructor(
        private data: SharedService, 
        private authService: AuthService, 
        private placeService: PlaceService) {

          this.authService.getUser().subscribe(user => this.currentUser = user); 
  }

  ngOnInit(): void {
    if (this.selectedTrip === undefined){
      this.selectedTrip = new Trip(); 
    }
    this.placeNames = []; 
    this.isTripOfUser = false; 
  }

  
  // Recharge la liste des places lorsqu'un autre Trip est sélectionné 
  //   -> lorsque l'Input selectedTrip change 
  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedTrip != null) {
      this.loadPlacesByTrip(changes.selectedTrip.currentValue.id);
      if (this.selectedTrip.userId == this.currentUser.id) {
        this.isTripOfUser = true; 
      }
      else {
        this.isTripOfUser = false; 
      }
    }
  }


  // réagit au clic sur une ligne 
  selectRow(row){
    //console.log(row); 
    this.data.changePlace(row);    
  }
  

  // Ajout d'un filtre personnalisé sur la colonne 'name' avec filterPredicate
  //  autrement le filtre s'applique sur tous les attributs de l'objet Place, même non-affichés. 
  applyFilter(filterValue: string){

    this.dataSource.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(
        element => {
          return element == 'name' && data[element].toLowerCase().indexOf(filter) != -1; 
        }
      ); 
    }
    
    this.dataSource.filter = filterValue; 
  }


  loadPlacesByTrip(tripId : String ) {

    this.dataSource = null; 
    this.placeService.loadAllPlacesByTrip(tripId)
    .subscribe(
      places => {
        this.placeNames = []; 
        this.dataSource = new MatTableDataSource(places as Place[])
      }
    )
  }
}
