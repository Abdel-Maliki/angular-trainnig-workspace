import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogTrainingComponent} from './dialog-training/dialog-training.component';
import {DisplayUserInfComponent} from './display-user-inf/display-user-inf.component';
import {TemplateAndComponentOutletMainComponent} from './template-and-component-outlet-main/template-and-component-outlet-main.component';
import {SharedModule} from '../../shared/shared-module';



@NgModule({
  declarations: [
    DialogTrainingComponent,
    DisplayUserInfComponent,
    TemplateAndComponentOutletMainComponent,
  ],
  exports: [
    TemplateAndComponentOutletMainComponent,
    DisplayUserInfComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TemplateAndComponentOutletModule { }
