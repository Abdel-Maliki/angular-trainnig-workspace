import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {decrement, increment, reset, success} from '../../actions/counter-actions';
import {CounterType} from '../../reducer/counter-reducer';
import {counterSelector} from '../../selectors/counter-selector';

@Component({
  selector: 'training-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<CounterType>;

  username: string;

  constructor(private store: Store<{ count: CounterType }>) {
    // this.count$ = store.select('count');
    this.count$ = store.select('count').pipe(select(counterSelector));
    /*this.count$ = store.select<'count'>('count').pipe(select((state, props) => {
      return {
        value: state.value + 3,
        username: state.username
      };
    }));*/

  }

  ngOnInit(): void {
  }


  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  success(): void {
    this.store.dispatch(success({username: this.username, score: 19}));
  }
}
