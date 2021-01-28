import {Provider} from '@angular/core';
import {API_URL, PRODUCT_SERVICE, USE_FACTORY_PRODUCT_SERVICE} from '../../services/tokens';
import {ProductValueService} from '../../services/product-value.service';
import {environment} from '../../../../../environments/environment';
import {ProductClassService} from '../../services/product-class.service';
import {LoggerService} from '../../services/logger-service';

/**
 * @author abdel-maliki
 * Date : 28/01/2021
 */


/*
  Utilisez  Object.freezepour geler la valeur de la configuration,
  afin qu'elle ne puisse pas être modifiée
*/

export class Providers {
  public static get values(): Provider[] {
    return environment.production ? Providers.prodValues() : Providers.devValues();
  }

  private static devValues(): Provider[] {
    return [
      LoggerService,
      {provide: API_URL, useValue: 'http://dev.com/api'},
      {provide: PRODUCT_SERVICE, useClass: ProductClassService},
      {
        provide: USE_FACTORY_PRODUCT_SERVICE, useFactory: (apiUlr: any) =>
          apiUlr
            ? new ProductValueService(apiUlr + 'Iphone 12 API_URL 1', 700000)
            : new ProductValueService('Iphone 12 API_URL 2', 700000),
        deps: [API_URL]
      }
    ];
  }

  private static prodValues(): Provider[] {
    return [
      {provide: API_URL, useValue: 'http://prod.com/api'},
      {provide: PRODUCT_SERVICE, useValue: Object.freeze(new ProductValueService('Iphone 12 PROD', 700000))}
    ];
  }
}
