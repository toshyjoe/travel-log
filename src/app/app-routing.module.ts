import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { AuthGuard } from './security/guards/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  // Add this default route to redirect to main
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "login", component: LoginPageComponent }, 
  { path: "main", 
        loadChildren: () =>
        import('./main-page/main-page.module').then(m => m.MainPageModule), 
        canActivate: [AuthGuard], 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
