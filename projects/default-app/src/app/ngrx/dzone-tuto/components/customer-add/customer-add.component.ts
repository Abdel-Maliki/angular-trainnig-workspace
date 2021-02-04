import {Component, OnInit} from '@angular/core';
import {CustomerState} from '../../reducer/customer';
import {Store} from '@ngrx/store';
import {Customer} from '../../model/customer';
import {addCustomer} from '../../action/customer-action';

@Component({
  selector: 'training-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) {
  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer({customer}));
  }

  ngOnInit(): void {
  }

}
