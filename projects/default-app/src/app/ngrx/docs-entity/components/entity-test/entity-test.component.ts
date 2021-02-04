import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAllUsers, selectCurrentUser, selectCurrentUsers, State} from '../../index';
import {addUser, updateUser, deleteUser, deleteUsers, selectedUser} from '../../actions/user.actions';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {FormControl} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'training-entity-test',
  templateUrl: './entity-test.component.html',
  styleUrls: ['./entity-test.component.scss']
})
export class EntityTestComponent implements OnInit {
  selectedUser = selectedUser;
  addUser = addUser;
  deleteUser = deleteUser;
  deleteUsers = deleteUsers;
  updateUser = updateUser;
  displayedColumns: string[] = ['select', 'id', 'name', 'prenom', 'actions'];
  users$: Observable<User[]> = this.store.pipe(select(selectAllUsers));
  users: User[] = [];
  currentUsers: string[] = [];
  currentUser: User = {id: undefined, name: undefined, lastName: undefined};
  userLastNameForm: FormControl = new FormControl();
  userNameForm: FormControl = new FormControl();
  selection = new SelectionModel<User>(true, []);


  constructor(public store: Store<{ users: State }>) {
  }

  ngOnInit(): void {
    this.storeJob();
    this.subscribeForm();
  }

  subscribeForm(): void {
    this.userNameForm.valueChanges.subscribe(value => this.currentUser.name = value);
    this.userLastNameForm.valueChanges.subscribe(value => this.currentUser.lastName = value);
  }

  setFormData(): void {
    this.userNameForm.setValue(this.currentUser.name);
    this.userLastNameForm.setValue(this.currentUser.lastName);
  }

  storeJob(): void {
    this.store.pipe(select(selectCurrentUsers)).subscribe((userIds: string[]) => this.currentUsers = Object.assign([], userIds));
    this.store.pipe(select(selectAllUsers)).subscribe((users: User[]) => this.users = Object.assign([], users));
    this.store.pipe(select(selectCurrentUser)).subscribe(user => {
      this.currentUser = Object.assign({}, user);
      this.setFormData();
    });
  }

  saveOrUpdate(): void {
    if (!!this.currentUser.id) {
      this.store.dispatch(updateUser({update: {id: this.currentUser.id, changes: {name: this.currentUser.name}}}));
      this.store.dispatch(selectedUser(null));
    } else {
      this.store.dispatch(addUser({user: {...this.currentUser, id: Math.floor(Math.random() * 100000000) + ''}}));
      this.store.dispatch(selectedUser(null));
    }
  }

  selectUser(user: User): void {
    this.store.dispatch(selectedUser({currentUser: user}));
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.users.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  get selectedIds(): string[] {
    return this.selection.selected.map(value => value.id);
  }

  deleteAll(): void {
    this.store.dispatch(deleteUsers({ids: this.selectedIds}));
    this.selection.clear();

  }
}
