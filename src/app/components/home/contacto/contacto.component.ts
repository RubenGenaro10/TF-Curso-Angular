import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  
  form: FormGroup;
  constructor (private router:Router,private fb: FormBuilder,private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3), Validators.pattern('^[a-z A-Z]+$')]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      textbox:['',[Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    })
  }
  ingresar(){
      
    this._snackBar.open('Gracias Por Contactarnos','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      
    })
    setTimeout(()=>{
      //Redirigir a la pagina
      this.router.navigate(['/dashboard/inicio']);
    },3000)
  }


} 
