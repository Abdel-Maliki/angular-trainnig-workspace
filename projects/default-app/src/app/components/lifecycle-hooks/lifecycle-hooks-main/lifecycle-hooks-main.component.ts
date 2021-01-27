import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'training-lifecycle-hooks-main',
  templateUrl: './lifecycle-hooks-main.component.html',
  styleUrls: ['./lifecycle-hooks-main.component.scss']
})
export class LifecycleHooksMainComponent implements OnInit {

  user = {name: 'User', id: 0};
  footerUser = {name: 'Footer', id: 1};
  headerUser = {name: 'Header', id: 2};
  refUser = {name: 'Ref', id: 3};


  constructor() {
  }

  ngOnInit(): void {
  }

  updateUser(): void {
    this.user = {name: 'userChange', id: 2};
  }
}
