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
  add(user) {
    tProduits.push(user);
  }
}
