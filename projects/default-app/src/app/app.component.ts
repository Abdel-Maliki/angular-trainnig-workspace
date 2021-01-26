import { Component } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'default-app';
  value1 = 30;
  constructor(private primengConfig: PrimeNGConfig) {
    primengConfig.ripple = true;
    // primengConfig.setTranslation()
  }
}
