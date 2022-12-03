import { Injectable } from '@angular/core';

interface user{
  email:string;
  password:string;
}

const users:user[] = [
  {email:'admin@admin.com',password:'admin123'},
  {email:'user@user.com',password:'admin123'},
  {email:'example@email.com',password:'admin123'}
];

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  permisos:boolean = false;

  constructor() { }

  login(email:string,password:string):boolean{
    let usuario = users.find(u => u.email==email && u.password==password)
    this.permisos = (usuario)? true:false;
    return this.permisos;
  }

  logout(){
    this.permisos=false; 
  }
}
