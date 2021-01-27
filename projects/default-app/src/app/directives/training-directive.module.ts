import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrainingClassDirective} from './training-class/training-class.directive';
import {TrainingIfDirective} from './training-if/training-if.directive';
import {ToggleDirective} from './toggle/toggle.directive';
import {ToolTipDirective} from './toolTip/tool-tip.directive';
import {HighLightDirective} from './highLight/highLight.directive';
import {PaneDirective} from './paneDirective/pane-directive';


@NgModule({
  declarations: [
    TrainingClassDirective,
    TrainingIfDirective,
    ToggleDirective,
    ToolTipDirective,
    HighLightDirective,
    PaneDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrainingClassDirective,
    TrainingIfDirective,
    ToggleDirective,
    ToolTipDirective,
    HighLightDirective,
    PaneDirective
  ],
  providers: []
})
export class TrainingDirectiveModule {
}
