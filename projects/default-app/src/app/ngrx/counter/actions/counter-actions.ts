import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const success = createAction(
  '[Counter Component] Success',
  props<{ username: string; score: number }>()
);
