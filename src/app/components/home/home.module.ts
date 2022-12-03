import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent,
    ContactoComponent,
    InicioComponent,
    RegistrarComponent,
    RegistroComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
