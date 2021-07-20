import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { SubirArchivosComponent } from './subir-archivos/subir-archivos.component';
import { EnviarMensajesComponent } from './enviar-mensajes/enviar-mensajes.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  declarations: [
 
    SubirArchivosComponent,
       EnviarMensajesComponent,
    
    
  ]
})
export class ComponentsModule {}
