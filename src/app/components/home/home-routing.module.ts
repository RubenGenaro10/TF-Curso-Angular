import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio',component:InicioComponent},
    {path:'usuarios',component:UsuariosComponent,children:[
      {path:'',component:RegistroComponent},
      {path:'registrar',component:RegistrarComponent},
      {path:'editar/:id',component:RegistrarComponent},
    ]},
    {path:'contacto',component:ContactoComponent},
    {path:'cursos',component:CursosComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
