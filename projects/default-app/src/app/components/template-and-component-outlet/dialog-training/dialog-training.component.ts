import {Component, EventEmitter, Injector, Input, OnInit, Output, TemplateRef, Type} from '@angular/core';
import {User} from '../../../entity/user';

@Component({
  selector: 'app-dialog-training',
  templateUrl: './dialog-training.component.html',
  styleUrls: ['./dialog-training.component.scss']
})
export class DialogTrainingComponent implements OnInit {
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() item: { user: User };
  @Input() template: TemplateRef<any>;
  @Input() component: Type<any>;
  @Input() myInjector: Injector;
  @Input() content;


  constructor() {
  }

  ngOnInit(): void {
  }
}
