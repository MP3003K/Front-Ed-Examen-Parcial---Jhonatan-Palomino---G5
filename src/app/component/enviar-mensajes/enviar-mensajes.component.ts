import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mensaje } from '../../models/mensaje';
import { mensaje } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-enviar-mensajes',
  templateUrl: './enviar-mensajes.component.html',
  styleUrls: ['./enviar-mensajes.component.css']
})
export class EnviarMensajesComponent implements OnInit {
  MensajeModel: Mensaje = new Mensaje()

  constructor(private mensaje: mensaje) { }

  ngOnInit(): void {
  }
  enviar_mensaje() {
    if (this.MensajeModel.correo_emisor == null || this.MensajeModel.correo_emisor.trim() == ""
      || this.MensajeModel.correo_destinatario == null || this.MensajeModel.correo_destinatario.trim() == ""
      || this.MensajeModel.correo_emisor == null || this.MensajeModel.correo_emisor.trim() == ""
      || this.MensajeModel.asunto == null || this.MensajeModel.asunto.trim() == ""
      || this.MensajeModel.mensaje == null || this.MensajeModel.mensaje.trim() == ""
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese todos los campos',
      })
    } else {
      console.log('Enviar Mensaje')
      console.log(this.MensajeModel);
      this.mensaje.enviar_mensaje(this.MensajeModel).subscribe(
        response => {
          Swal.fire('Nuevo mensaje', `El correo  ${this.MensajeModel.correo_destinatario}  ha recibido el correo!`, "success")
        }
      )
    }
    this.limpiar();
  }

  limpiar(){
    this.MensajeModel.correo_emisor="";
    this.MensajeModel.correo_destinatario="";
    this.MensajeModel.asunto="";
    this.MensajeModel.mensaje="";
  }
}

