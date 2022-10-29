import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
    { usuario: 'mgomez', nombre: 'Martin', apellido: 'Gomez', sexo: 'Masculino' },
    { usuario: 'ngarcia',nombre: 'Nicolas',apellido: 'Garcia',sexo: 'Masculino' },
    { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
    { usuario: 'mgomez', nombre: 'Micaela', apellido: 'Gomez', sexo: 'Femenino' },
    { usuario: 'ngarcia', nombre: 'Nicolas', apellido: 'Garcia', sexo: 'Masculino' },
  ];
  
  constructor() { }
}
