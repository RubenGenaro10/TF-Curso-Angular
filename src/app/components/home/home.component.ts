import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "LOS SENIORS";
  menu=[
    {nombre:'Inicio',redirect:'/dashboard/inicio'},
    {nombre:'Usuarios',redirect:'/dashboard/usuarios'},
    {nombre:'Cursos',redirect:'/dashboard/cursos'},
    {nombre:'Contacto',redirect:'/dashboard/contacto'}
  ];

  constructor(private router:Router,private breakpointObserver: BreakpointObserver,private _loginService:LoginService) {}
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
      );
  logout(){
    this._loginService.logout();
    this.router.navigate(['/login']);
  }

}
