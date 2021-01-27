import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild, DoCheck, ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {User} from '../../../entity/user';
import {PaneDirective} from '../../../directives/paneDirective/pane-directive';

/*
Notez qu'une directive ne doit généralement pas utiliser à la fois DoCheck et OnChanges
pour répondre aux changements sur la même entrée , car ngOnChanges continuera
à être appelé lorsque le détecteur de changement par défaut détecte des changements.
*/

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'training-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.scss'],
  providers: []
})
export class LifecycleHooksChildComponent
  implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() user: User;
  @Output() updateUser: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('wrapper') wrapper: ElementRef;
  @ContentChild(PaneDirective, {static: true}) paneDirective: ElementRef;
  @ContentChild('trainingPane', {static: true}) content!: PaneDirective;


  constructor() {
  }

  // après changément d'un attribut avec @Input.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Class: DisplayUserInfComponent, Function: ngOnChanges, Line 28 changes(): '
      , changes);
  }

  // Appelé une fois, après le premier ngOnChanges()
  ngOnInit(): void {
    console.log('Class: DisplayUserInfComponent, Function: ngOnInit, Line 28 (): ');
  }

  // après chaque cycle de détection de changement, peu importe où le changement s'est produit.
  ngDoCheck(): void {
    console.log('Class: DisplayUserInfComponent, Function: ngDoCheck, Line 38 (): ');
  }

  // Appelé une fois après le premier ngDoCheck()
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - content', this.content);
    console.log('ngAfterContentInit - paneDirective', this.paneDirective);
  }

  // Appelé après ngAfterContentInit()et tous les suivants ngDoCheck().
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - wrapper', this.wrapper);
    console.log('ngAfterContentChecked - content', this.content);
    console.log('ngAfterContentChecked - paneDirective', this.paneDirective);
  }

  // Appelé une fois après le premier ngAfterContentChecked()
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
    console.log('ngAfterViewInit - content', this.content);
    console.log('ngAfterViewInit - paneDirective', this.paneDirective);
  }

  // Appelé après le ngAfterViewInit()et tous les suivants ngAfterContentChecked()
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - wrapper', this.wrapper);
    console.log('ngAfterViewChecked - content', this.content);
    console.log('ngAfterViewChecked - paneDirective', this.paneDirective);
  }

  ngOnDestroy(): void {
  }

}

