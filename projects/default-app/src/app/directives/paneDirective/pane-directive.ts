import {Directive, Input} from '@angular/core';

/**
 * @author abdel-maliki
 * Date : 27/01/2021
 */

// tslint:disable-next-line:directive-selector
@Directive({selector: '[trainingPane]'})
export class PaneDirective {
  @Input() id!: string;
}
