import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { aportelogrocomponent } from './aportelogro/aportelogro.component';
import { AporteFormComponent } from './aporte-form/aporte-form.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  declarations: [
    aportelogrocomponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    ButtonsComponent,
    CardsComponent,
    AporteFormComponent,
    
    
  ]
})
export class ComponentsModule {}
