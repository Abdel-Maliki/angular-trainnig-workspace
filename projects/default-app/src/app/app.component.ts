import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {PrimeNgTranslation} from './conf/primeNgTranslation';

@Component({
  selector: 'training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'default-app';

  constructor(private primengConfig: PrimeNGConfig) {
    primengConfig.ripple = true;
    primengConfig.setTranslation(PrimeNgTranslation);
  }

  ngOnInit(): void {
  }
}
