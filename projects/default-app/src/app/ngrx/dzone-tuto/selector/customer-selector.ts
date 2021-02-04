import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromCustomer from './../reducer/customer';
import {Customer} from '../model/customer';
import {CustomerState} from '../reducer/customer';
import {Props} from '@ngrx/store/src/models';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey,
);
export const selectCustomers = createSelector(
  selectCustomerState,
  (state: CustomerState) => state.customers.concat(new Customer())
);


export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: CustomerState) => {
  return state.customers || [];
};

export const selectCustomers2 = createSelector<CustomerState, Props<{ customer: Customer }>, Customer[], Customer[]>(
  selectFeature,
  (state: Customer[]) => {
    console.log('Function: selectCustomers2 , Line 32 (): selectCustomers2', state);
    return state.concat(new Customer()).concat(new Customer());
  }
);
