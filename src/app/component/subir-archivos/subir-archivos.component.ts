import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../models/archivo';

@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css']
})
export class SubirArchivosComponent implements OnInit {
  ArchivoModel: Archivo = new Archivo()

  constructor() { }

  ngOnInit(): void {
  }
}
