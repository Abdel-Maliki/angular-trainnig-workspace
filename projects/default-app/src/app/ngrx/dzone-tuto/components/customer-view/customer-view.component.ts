import {Component, OnInit} from '@angular/core';
import {CustomerState} from '../../reducer/customer';
import {selectCustomers2} from '../../selector/customer-selector';
import {select, Store} from '@ngrx/store';
import {Customer} from '../../model/customer';
import {Observable} from 'rxjs';

@Component({
  selector: 'training-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<{ customer: CustomerState }>) {
    // this.customers$ = this.store.pipe(select(selectCustomers));
    // this.customers$ = this.store.pipe(select(selectCustomers));
    this.customers$ = store.select('customer').pipe(select(selectCustomers2));
  }

  ngOnInit(): void {
  }

}
