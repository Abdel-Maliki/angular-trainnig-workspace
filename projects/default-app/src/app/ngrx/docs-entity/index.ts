import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';

export const userFeaturName = 'users';

export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
};

export const selectUserState = createFeatureSelector<State>(userFeaturName);

/*export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);*/
export const selectAllUsers = createSelector(
  selectUserState,
  (state: State) => {
    return fromUser.selectAllUsers(state.users);
  }
);
export const selectUserTotal = createSelector(
  selectUserState,
  s1 => fromUser.selectUserTotal(s1.users)
);

export const selectCurrentUser = createSelector(
  selectUserState,
  s1 => fromUser.selectCurrentUser(s1.users)
);

export const selectCurrentUsers = createSelector(
  selectUserState,
  s1 => fromUser.selectCurrentUsers(s1.users)
);


export const selectUserEntities = createSelector(
  selectUserState,
  s1 => fromUser.selectUserEntities(s1.users)
);
