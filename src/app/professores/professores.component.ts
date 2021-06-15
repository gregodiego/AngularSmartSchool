import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  
  professores = [
    { nome: 'Alberto'},
    { nome: 'João'},
    { nome: 'Cabrero'},
    { nome: 'Felipe'},
    { nome: 'Alberto'},
    { nome: 'Alberto'},
    { nome: 'Alberto'},
    { nome: 'Alberto'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
