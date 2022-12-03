import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cargar = false;
  form: FormGroup;
  constructor (private router:Router,private fb: FormBuilder,private _snackBar: MatSnackBar,private _loginService:LoginService){
    this.form = this.fb.group({
      email:['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required]],
    })
  }
  ingresar(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    
    if(this._loginService.login(email,password)){
      this.fakeCargar();
    }else{
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('El correo o contraseña es incorrecto','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeCargar(){
    this.cargar = true;
    setTimeout(()=>{
      //Redirigir a la pagina
      this.router.navigate(['/dashboard/inicio']);
    },1000)
  }

}
