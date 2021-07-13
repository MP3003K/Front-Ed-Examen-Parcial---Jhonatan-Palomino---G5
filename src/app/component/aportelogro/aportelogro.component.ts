import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';

import { Aportelogro } from 'src/app/models/aportelogro';
import { AportesService } from 'src/app/services/aportes.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-ngbd-pagination',
	templateUrl: './aportelogro.component.html'
})
export class aportelogrocomponent implements OnInit {
	aportes: Aportelogro[] = [];
	aporte: Aportelogro = new Aportelogro();
	constructor( private aportesService: AportesService , private router:Router){}


	ngOnInit(): void {
		this.obteberaportes();
	}
	 obteberaportes(){
		 this.aportesService.getAporte().subscribe(data =>{
			 console.log(data);
			 this.aportes= data;
		 }, error =>{
			 console.log(error);
		 })
		 
	 }
	 create(){
		 delete this.aporte.idportelogro;
		 delete this.aporte.iddocente;
		 console.log(this.aporte); 
		 this.aportesService.saveAporte(this.aporte)
		 .subscribe(
			 res => {
				 console.log(res);
				 this.obteberaportes();
				 this.limpiarformulario();
			 },
			 err => console.error(err)
		 )
		
	 }

	 del(id:String){
		swal.fire({
			title: 'Estas seguro?',
			text: "No podras reverti esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete!'
		  }).then((result) => {
			if (result.isConfirmed) {
				this.aportesService.deleteAporte(id).subscribe(
					res=> {
						console.log(res);
						this.obteberaportes();
						swal.fire(
						   'Eliminado!',
						   'El registro ha sido eliminado.',
						   'success') 
					},
					err => console.error(err)
				)
			}
		  })



		 console.log(id)
		
	 }

	 limpiarformulario(){
		 
			 this.aporte.institucion="";
			 this.aporte.detallelogro="";
			 this.aporte.archivologro="";
			 this.aporte.fechalogro="";
			 
		 
	 }
}
