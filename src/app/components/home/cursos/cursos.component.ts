import { Component, Input, OnInit } from '@angular/core';

import { trigger,style,transition,animate,state } from '@angular/animations';

import data from './data';

@Component({
  selector: 'app-cursos',
  templateUrl: 'cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          800,
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class CursosComponent implements OnInit {
    ngOnInit(): void {
        this.courses = data;
    }
    @Input() name! : string;
    public courses : any[] = [];
}
