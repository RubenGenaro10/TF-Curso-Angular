import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  id!:number;
  formUsuario!: FormGroup;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private usuarioService:UsuarioService){
      this.formUsuario = this.fb.group({
        name:['',[Validators.required]],
        username:['',[Validators.required]],
        email:['',[Validators.required]],
        phone:['',[Validators.required]],
        website:['',[Validators.required]],
        street:['',[Validators.required]],
        suite:['',[Validators.required]],
        city:['',[Validators.required]],
        zipcode:['',[Validators.required]],
        lat:['',[Validators.required]],
        lng:['',[Validators.required]],
        nameCompany:['',[Validators.required]],
        bs:['',[Validators.required]],
        catchPhrase:['',[Validators.required]],
      })
    }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    if(this.id){ //Si existe un parametro id, el usuario está en modo edicion
      let usuario = this.usuarioService.getUsuario(this.id);
      //Llenar el formulario con el usuario obtenido
      this.formUsuario.get('name')?.setValue(usuario.name);
      this.formUsuario.get('username')?.setValue(usuario.username);
      this.formUsuario.get('email')?.setValue(usuario.email);
      this.formUsuario.get('phone')?.setValue(usuario.phone);
      this.formUsuario.get('website')?.setValue(usuario.website);
      this.formUsuario.get('street')?.setValue(usuario.address.street);
      this.formUsuario.get('suite')?.setValue(usuario.address.suite);
      this.formUsuario.get('city')?.setValue(usuario.address.city);
      this.formUsuario.get('zipcode')?.setValue(usuario.address.zipcode);
      this.formUsuario.get('lat')?.setValue(usuario.address.geo.lat);
      this.formUsuario.get('lng')?.setValue(usuario.address.geo.lng);
      this.formUsuario.get('nameCompany')?.setValue(usuario.company.name);
      this.formUsuario.get('bs')?.setValue(usuario.company.bs);
      this.formUsuario.get('catchPhrase')?.setValue(usuario.company.catchPhrase);
    }
  }

  registrarUsuario(){
    let usuario:Usuario = {
      id:this.usuarioService.getNewID(),
      name: this.formUsuario.value.name,
      username: this.formUsuario.value.username,
      email: this.formUsuario.value.email,
      address:{
        street:this.formUsuario.value.street,
        suite:this.formUsuario.value.suite,
        city:this.formUsuario.value.city,
        zipcode:this.formUsuario.value.zipcode,
        geo:{
          lat:this.formUsuario.value.lat,
          lng:this.formUsuario.value.lng
        }
      },
      phone: this.formUsuario.value.phone,
      website: this.formUsuario.value.website,
      company:{
        name: this.formUsuario.value.name,
        catchPhrase: this.formUsuario.value.catchPhrase,
        bs: this.formUsuario.value.bs
      }
    }
    if(this.id){
      usuario.id = this.id;
      this.usuarioService.editarUsuario(this.id,usuario);
    }else{
      this.usuarioService.agregarUsuario(usuario);
    }
    this.router.navigate(['/dashboard/usuarios']);
  }
}

