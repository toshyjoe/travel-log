import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { AuthGuard } from './security/guards/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  // Add this default route to redirect to dummy
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  // Add the route to display the dummy page
  {
    path: "main",
    component: MainPageComponent,
    // Prevent access to this page to unauthenticated users
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
