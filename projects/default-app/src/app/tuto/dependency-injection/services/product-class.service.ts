/**
 * @author abdel-maliki
 * Date : 28/01/2021
 */
import {IProduct} from '../components/class/i-product';
import {Injectable} from '@angular/core';
import {LoggerService} from './logger-service';

@Injectable()
export class ProductClassService implements IProduct {
  designation = 'Iphone 12 DEV';
  price = 7000;

  constructor(public loggerService: LoggerService) {
    loggerService.log('kkk');
  }

  getPrice(): number {
    return this.price;
  }
}
