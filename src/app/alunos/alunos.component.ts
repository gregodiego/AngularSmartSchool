import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  alunos = [
    {nome:'Diego'},
    {nome:'Marta'},
    {nome:'João'},
    {nome:'Chistopher'},
    {nome:'Jenny'},
    {nome:'Danilo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
