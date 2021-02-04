import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {User} from '../models/user.model';
import * as UserActions from '../actions/user.actions';
import {EntitySelectors} from '@ngrx/entity/src/models';

export interface State extends EntityState<User> {
  // additional entities state properties
  currentUser: User | null;
  currentUsers: User[] | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  currentUser: null,
  currentUsers: [],
});

export const userReducer = createReducer<State>(
  initialState,
  on(UserActions.addUser, (state, {user}) => {
    return adapter.addOne<State>(user, {...state, currentUser: null});
  }),
  on(UserActions.setUser, (state, {user}) => {
    return adapter.setOne<State>(user, state);
  }),
  on(UserActions.upsertUser, (state, {user}) => {
    return adapter.upsertOne<State>(user, state);
  }),
  on(UserActions.addUsers, (state, {users}) => {
    return adapter.addMany<State>(users, state);
  }),
  on(UserActions.upsertUsers, (state, {users}) => {
    return adapter.upsertMany<State>(users, state);
  }),
  on(UserActions.updateUser, (state, {update}) => {
    return adapter.updateOne<State>(update, {...state, currentUser: null});
  }),
  on(UserActions.updateUsers, (state, {updates}) => {
    return adapter.updateMany<State>(updates, state);
  }),
  on(UserActions.mapUser, (state, {entityMap}) => {
    return adapter.mapOne<State>(entityMap, state);
  }),
  on(UserActions.mapUsers, (state, {entityMap}) => {
    return adapter.map<State>(entityMap, state);
  }),
  on(UserActions.deleteUser, (state, {id}) => {
    return adapter.removeOne<State>(id, state);
  }),
  on(UserActions.deleteUsers, (state, {ids}) => {
    return adapter.removeMany<State>(ids, state);
  }),
  on(UserActions.deleteUsersByPredicate, (state, {predicate}) => {
    return adapter.removeMany<State>(predicate, state);
  }),
  on(UserActions.loadUsers, (state, {users}) => {
    return adapter.setAll<State>(users, state);
  }),
  on(UserActions.clearUsers, state => {
    return adapter.removeAll<State>({...state});
  }),
  on(UserActions.selectedUser, (state: State, {currentUser}) => {
    return {
      ...state,
      currentUser
    };
  }),
  on(UserActions.selectedUsers, (state: State, {users}) => {
    return {
      ...state,
      currentUsers: users
    };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
}: EntitySelectors<User, State> = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;

export const selectCurrentUser = (state: State): User => {
  return state.currentUser ? state.currentUser : {id: undefined, name: undefined, lastName: undefined};
};

export const selectCurrentUsers = (state: State): string[] => {
  return state.currentUsers ? state.currentUsers.map(value => value.id) : [];
};
