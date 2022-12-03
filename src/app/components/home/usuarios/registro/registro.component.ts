import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit,AfterViewInit {
  usuarios: Usuario[] = []
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'control'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService:UsuarioService,private snackBar:MatSnackBar) {

  }
  ngOnInit(): void {
    this.cargarUsuarios();
  }
  
  cargarUsuarios(){
    this.usuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }
  eliminarUsuario(id:number){
    this._usuarioService.eliminarUsuario(id);
    this.cargarUsuarios();
    this.funcionalidad();

    this.snackBar.open('Usuario eliminado','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  ngAfterViewInit() {
    this.funcionalidad();
  }
  funcionalidad(){
    this.paginator._intl.itemsPerPageLabel = 'Usuarios por página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Pagina anterior';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

