import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../models/archivo';
import { archivoServices } from 'src/app/services/subirArchivo.service';

  
@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css'],
  
})
export class SubirArchivosComponent implements OnInit {
  ArchivoModel: Archivo = new Archivo()
  constructor(private archivoServices: archivoServices) { }
  archivos: any[] = [];

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.archivoServices.getDocentesParticipantes().subscribe((data) => {
    
      console.log(data);
      this.archivos = data;
      console.log('Listar_archivos');
      console.log(this.archivos);
    }, (error) => {
      console.log(error);
    })
  }
}
