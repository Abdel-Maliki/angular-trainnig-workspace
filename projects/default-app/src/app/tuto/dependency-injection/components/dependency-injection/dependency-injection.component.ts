import {Component, Inject, OnInit} from '@angular/core';
import {API_URL, PRODUCT_SERVICE, USE_FACTORY_PRODUCT_SERVICE} from '../../services/tokens';
import {IProduct} from '../class/i-product';

@Component({
  selector: 'training-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})

export class DependencyInjectionComponent implements OnInit {

  constructor(@Inject(API_URL) public apiUrl: string,
              @Inject(PRODUCT_SERVICE) public productService: IProduct,
              @Inject(USE_FACTORY_PRODUCT_SERVICE) public factory: IProduct) {
  }

  ngOnInit(): void {
  }

}
