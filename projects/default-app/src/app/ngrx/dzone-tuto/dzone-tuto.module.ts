import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from './reducer/customer';



@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ]
})
export class DzoneTutoModule { }
