import { NgModule } from '@angular/core'; 
import { Routes, RouterModule} from '@angular/router'; 
import { DetailTripComponent } from './detail-trip/detail-trip.component';


const routes: Routes = [
  {
    path: '', component: DetailTripComponent 
  }, 
]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule {}