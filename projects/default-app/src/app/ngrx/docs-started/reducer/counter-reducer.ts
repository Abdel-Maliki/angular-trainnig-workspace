import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset, success} from '../actions/counter-actions';

export type CounterType = {
  value: number;
  username: string;
};

export const initialState = {value: 0, username: undefined};

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer<CounterType>(
  initialState,
  on<CounterType>(increment, (state) => {
    return {value: state.value + 1, username: undefined};
  }),
  on<CounterType>(decrement, (state) => {
    return {value: state.value - 1, username: undefined};
  }),
  on<CounterType>(reset, () => {
    return {value: 0, username: undefined};
  }),
  on<CounterType>(success, (state, action) => {
    return {value: state.value, username: action.username};
  }),
);

// tslint:disable-next-line:typedef
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
