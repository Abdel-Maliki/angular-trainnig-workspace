import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../../entity/user';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'training-display-user-inf',
  templateUrl: './display-user-inf.component.html',
  styleUrls: ['./display-user-inf.component.scss'],
  providers: []
})
export class DisplayUserInfComponent implements OnInit {
  @Input() user: User;

  constructor(private messageService: MessageService, @Inject(User) userInject?: User) {
    if (userInject) {
      this.user = userInject;
    }
  }

  init(): void {
    this.messageService.add({severity: 'success', summary: 'success'});
  }

  ngOnInit(): void {
  }

}
