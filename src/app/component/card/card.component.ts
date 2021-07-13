import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/Docente/docente';
import { CU2Service } from 'src/app/services/CU2/cu2.service';
import Swal from 'sweetalert2';
@Component({
  templateUrl: 'card.component.html'
})

export class CardsComponent implements OnInit {
  DocenteModel: Docente = new Docente()
  docentes: any[] = [];
  facultades: any[] = [];
  uno = 0;
  constructor(private CU2Service: CU2Service) { }
  ngOnInit(
  ): void {
    this.listar();
  }
  cat_deceada = null;
  cat_actual = null;
  listar(): void {
    this.CU2Service.getDocentesParticipantes().subscribe(data => {

      this.docentes = data;
      console.log('Listar_docentes');
      console.log(this.docentes);
    }, error => {
      console.log(error);
    })
  }


  agregarPersona(): void {
    console.log(this.DocenteModel.nombres)
    if (this.DocenteModel.nombres == null || this.DocenteModel.nombres.trim() == ""
      || this.DocenteModel.apellidos == null || this.DocenteModel.apellidos.trim() == ""
      || this.DocenteModel.dni == null || this.DocenteModel.dni.trim() == ""
      || this.DocenteModel.celular == null || this.DocenteModel.celular.trim() == ""
      || this.DocenteModel.correo == null || this.DocenteModel.correo.trim() == ""
      || this.DocenteModel.cat_actual == null || this.cat_actual
      || this.DocenteModel.cat_deceada == null || this.cat_deceada
      || this.DocenteModel.password == null || this.DocenteModel.password.trim() == ""


    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese todos los campos',
      })
    } else {
      console.log('Crear-Docente')
      console.log(this.DocenteModel);
      this.CU2Service.addPersona(this.DocenteModel).subscribe(
        response => {
          Swal.fire('Nueva Docente', `La persona ${this.DocenteModel.nombres}  ha sido creado con exito!`, "success")
        }
      )
      this.limpiar();
      this.listar();
      this.listar();
    }
  }
  limpiar() {
    this.DocenteModel.nombres = "";
    this.DocenteModel.apellidos = "";
    this.DocenteModel.dni = "";
    this.DocenteModel.celular = "";
    this.DocenteModel.telefono_fijo = "";
    this.DocenteModel.correo = "";
    this.DocenteModel.password = "";
    this.DocenteModel.cat_actual = 99;
    this.DocenteModel.cat_deceada = 99;

    console.log('limpiar-docente')
    console.log(this.DocenteModel)
  }

  eliminar(id: number) {
    console.log(id);
    this.CU2Service.eliminar_docente(id).subscribe(
      response => {
        Swal.fire(
          'Eliminado!',
          'El docente participante ha sido eliminado.',
          'success'
        )
      }
    )
    this.listar();
    this.listar();
  }
  receptor: any;
  cargar_docente(id: number) {

    this.CU2Service.TraerDocenteParticipante(id).subscribe(
      (data) => {
        this.receptor = data;
        this.DocenteModel.idusuario = this.receptor[0].idusuario;
        this.DocenteModel.nombres = this.receptor[0].nombres;
        this.DocenteModel.apellidos = this.receptor[0].apellidos;
        this.DocenteModel.dni = this.receptor[0].dni;
        this.DocenteModel.celular = this.receptor[0].celular;
        this.DocenteModel.telefono_fijo = this.receptor[0].telefono_fijo;
        this.DocenteModel.correo = this.receptor[0].correo;
        this.DocenteModel.cat_actual = this.receptor[0].cat_actual;
        this.DocenteModel.cat_deceada = this.receptor[0].cat_deceada;
        console.log('Cargar-docente')
        console.log(this.DocenteModel);
      })
  }

  editarPersona(id: number): void {

    if (this.DocenteModel.nombres == null || this.DocenteModel.nombres.trim() == ""
      || this.DocenteModel.apellidos == null || this.DocenteModel.apellidos.trim() == ""
      || this.DocenteModel.dni == null || this.DocenteModel.dni.trim() == ""
      || this.DocenteModel.celular == null || this.DocenteModel.celular.trim() == ""
      || this.DocenteModel.correo == null || this.DocenteModel.correo.trim() == ""
      || this.DocenteModel.cat_actual == null || this.cat_actual
      || this.DocenteModel.cat_deceada == null || this.cat_deceada
      || this.DocenteModel.password == null || this.DocenteModel.password.trim() == ""
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese todos los campos',
      })
    } else {
      console.log('Editar-docente')
      console.log(this.DocenteModel)
      this.CU2Service.updateDocParticipante(this.DocenteModel, id).subscribe(
        response => {
          Swal.fire('Docente Editado', `La persona ${this.DocenteModel.nombres}  ha sido editado con exito`, "success")
        }
      )
      this.listar();
      this.listar();
      this.listar();
    }
  }
}
