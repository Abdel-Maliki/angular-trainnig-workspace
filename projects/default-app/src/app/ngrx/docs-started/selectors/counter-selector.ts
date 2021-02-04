import {createSelector} from '@ngrx/store';
import {CounterType} from '../reducer/counter-reducer';

export const counterSelector = createSelector<CounterType, CounterType, CounterType>(
  (state: CounterType) => state,
  (state: CounterType) => {
    return {
      value: state.value + 3,
      username: state.username
    };
  }
);
