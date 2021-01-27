import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[trainingIf]'
})
export class TrainingIfDirective {

  // tslint:disable-next-line:variable-name
  _trainingIfValue: boolean;

  // tslint:disable-next-line:variable-name
  constructor(private _viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }


  @Input()
  set trainingIf(condition) {
    this._trainingIfValue = condition;
    this._updateView();
  }

  // tslint:disable-next-line:typedef
  _updateView() {
    if (this._trainingIfValue) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }

}
