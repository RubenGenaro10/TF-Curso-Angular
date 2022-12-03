import { Component, OnInit } from '@angular/core';
import { Integrante,Baner } from './integrante';
import { INTEGRANTE,BANER } from './integrante.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  integrantes?:Integrante[]; 
  Baners?:Baner[];
  ngOnInit(): void {
    this.integrantes = INTEGRANTE;
    this.Baners =BANER;
  }

}
