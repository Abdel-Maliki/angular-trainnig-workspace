import {InjectionToken} from '@angular/core';
import {IProduct} from '../components/class/i-product';

export const API_URL = new InjectionToken<string>('');
export const PRODUCT_SERVICE = new InjectionToken<IProduct>('description du produit');
export const USE_FACTORY_PRODUCT_SERVICE = new InjectionToken<IProduct>('USE_FACTORY_PRODUCT_SERVICE');
