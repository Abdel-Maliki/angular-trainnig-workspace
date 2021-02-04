import {createAction, props} from '@ngrx/store';
import {Customer} from '../model/customer';

export const addCustomer = createAction(
  '[Customer] Add Customer',
  props<{customer: Customer}>()
);
