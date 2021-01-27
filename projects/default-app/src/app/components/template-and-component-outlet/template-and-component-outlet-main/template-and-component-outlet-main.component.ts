import {Component, Injector, OnInit} from '@angular/core';
import {User} from '../../../entity/user';
import {DisplayUserInfComponent} from '../display-user-inf/display-user-inf.component';

@Component({
  selector: 'training-template-and-component-outlet-main',
  templateUrl: './template-and-component-outlet-main.component.html',
  styleUrls: ['./template-and-component-outlet-main.component.scss']
})
export class TemplateAndComponentOutletMainComponent implements OnInit {

  item: { user: User } = {user: {name: 'namel', id: 3333}};
  visibleTemplateOption = false;
  visibleComponentOption = false;

  component = DisplayUserInfComponent;
  myInjector: Injector;
  myContent: any[] = [[document.createTextNode('Component')]];


  constructor(injector: Injector) {
    this.myInjector = Injector.create({providers: [{provide: User, useValue: new User('Lik-ma', '001'), deps: []}], parent: injector});
  }

  ngOnInit(): void {
  }

  visibleTemplateOptionChange(): void {
    this.visibleTemplateOption = !this.visibleTemplateOption;
    this.visibleComponentOption = false;
  }

  visibleComponentOptionChange(): void {
    this.visibleComponentOption = !this.visibleComponentOption;
    this.visibleTemplateOption = false;
  }

}
