import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

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
  getUsuarios() {
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1)
  }
}
