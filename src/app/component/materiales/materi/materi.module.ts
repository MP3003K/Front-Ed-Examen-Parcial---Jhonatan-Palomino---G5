import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTable} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTable,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports:
  [
    MatTable,
    MatTable,
    ReactiveFormsModule,
    MatButtonModule  
  ]
})
export class MateriModule { }
