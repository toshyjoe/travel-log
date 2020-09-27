import { NgModule } from '@angular/core'; 
import { Routes, RouterModule} from '@angular/router'; 
import { DetailTripComponent } from '../trip/detail-trip/detail-trip.component';
import { MainPageComponent } from './main-page.component'; 


const routes: Routes = [
  { path: '', component: MainPageComponent }, 
  { path: "trip/:id", 
      loadChildren: () =>
      import('../trip/trip.module').then(m => m.TripModule), 
  }, 
]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}