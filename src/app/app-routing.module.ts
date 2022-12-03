import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { PermisosGuard } from './guards/permisos.guard';

const routes: Routes = [
  {path: '',redirectTo:'dashboard', pathMatch:'full'},
  {path:'login',canActivate:[LoginGuard],component:LoginComponent},
  {path:'dashboard',canActivate:[PermisosGuard],loadChildren:()=>import('./components/home/home.module').then(x=>x.HomeModule)},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
