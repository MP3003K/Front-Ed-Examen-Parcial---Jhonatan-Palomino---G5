import { Routes } from '@angular/router';



import { SubirArchivosComponent } from './subir-archivos/subir-archivos.component';

import { EnviarMensajesComponent } from './enviar-mensajes/enviar-mensajes.component';



export const ComponentsRoutes: Routes = [
	
	{
		path: '',
		children: [
			
			{
				path: 'archivos_upload',
				component: SubirArchivosComponent,
				data: {
					title: 'Subir Archivos',
					urls: [
						{ title: 'Subir Archivos', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Subir Archivos' }
					]
				}
			},
			{
				path: 'enviar_mensaje',
				component:EnviarMensajesComponent ,
				data: {
					title: 'Enviar Mensaje',
					urls: [
						{ title: 'Enviar Mensaje', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Enviar Mensaje' }
					]
				}
			}
		]
	}
];
