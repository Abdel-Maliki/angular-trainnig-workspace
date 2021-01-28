/**
 * @author abdel-maliki
 * Date : 28/01/2021
 */
import {IProduct} from '../components/class/i-product';


export class ProductValueService implements IProduct{
  // constructor(private loggerService: LoggerService) {
  constructor(public designation?, public price?: number) {
  }

  getPrice(): number {
    return this.price;
  }
}
