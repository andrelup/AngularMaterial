import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  listUsuarios: Usuario[] = [
    { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
    { usuario: 'mgomez', nombre: 'Martin', apellido: 'Gomez', sexo: 'Masculino' },
    { usuario: 'ngarcia',nombre: 'Nicolas',apellido: 'Garcia',sexo: 'Masculino' },
    { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
    { usuario: 'mgomez', nombre: 'Micaela', apellido: 'Gomez', sexo: 'Femenino' },
    { usuario: 'ngarcia', nombre: 'Nicolas', apellido: 'Garcia', sexo: 'Masculino' },
  ];
  
  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];
  
  dataSource= new MatTableDataSource(this.listUsuarios)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
