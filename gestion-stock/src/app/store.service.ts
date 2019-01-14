import {Injectable} from '@angular/core';
import {tProduits} from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }

  list() {
    return tProduits;
  }
  add(product) {
    product.price = 0.00;
    product.ingredients = 'Ce n\'est pas demandé :p'
    tProduits.push(product);
  }
}
