import {Component, Inject, OnInit} from '@angular/core';
import {API_URL, PRODUCT_SERVICE, USE_FACTORY_PRODUCT_SERVICE} from '../../services/tokens';
import {ProductValueService} from '../../services/product-value.service';
import {ProductClassService} from '../../services/product-class.service';
import {IProduct} from '../class/i-product';

// Chaque compent à son propre injecter s'il ne trouve pas une dependence il demande à son pére
// qui lui aussi peut demander à son pere jusqu'a AppModule
@Component({
  selector: 'training-dependency-injection-static',
  templateUrl: './dependency-injection-static.component.html',
  styleUrls: ['./dependency-injection-static.component.scss'],
  providers: [
    {provide: API_URL, useValue: 'http://static.com/api'},
    {provide: PRODUCT_SERVICE, useClass: ProductClassService},
    {
      provide: USE_FACTORY_PRODUCT_SERVICE, useFactory: (apiUlr: any) =>
        apiUlr
          ? new ProductValueService(apiUlr + 'static', 111)
          : new ProductValueService('static', 1111),
      deps: [API_URL]
    }
  ]
})
export class DependencyInjectionStaticComponent implements OnInit {

  constructor(@Inject(API_URL) public apiUrl: string,
              @Inject(PRODUCT_SERVICE) public productService: IProduct,
              @Inject(USE_FACTORY_PRODUCT_SERVICE) public factory: IProduct) {
  }

  ngOnInit(): void {
  }

}
