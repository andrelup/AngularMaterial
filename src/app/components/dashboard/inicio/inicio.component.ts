import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

const listUsuarios: Usuario[] = [
  { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
  { usuario: 'mgomez', nombre: 'Martin', apellido: 'Gomez', sexo: 'Masculino' },
  {
    usuario: 'ngarcia',
    nombre: 'Nicolas',
    apellido: 'Garcia',
    sexo: 'Masculino',
  },
  { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
  { usuario: 'mgomez', nombre: 'Micaela', apellido: 'Gomez', sexo: 'Femenino' },
  {
    usuario: 'ngarcia',
    nombre: 'Nicolas',
    apellido: 'Garcia',
    sexo: 'Masculino',
  },
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];
  dataSource = listUsuarios;

  constructor() {}

  ngOnInit(): void {}
}
