import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
nameCtrl: FormControl;
supplierCtrl: FormControl;
ageCtrl: FormControl;
descriptionCtrl: FormControl;
productGroup: FormGroup;
products;
show = false; 

  constructor(private productsService: StoreService, fb: FormBuilder) {
    this.nameCtrl = fb.control('', Validators.required);
    this.supplierCtrl = fb.control('', Validators.required);
    this.ageCtrl= fb.control('', [Validators.required, Validators.pattern('[0-9]')]);
    this.descriptionCtrl =fb.control('', Validators.required);
    this.productGroup = fb.group({
      name: this.nameCtrl,
      supplier: this.supplierCtrl,
      age: this.ageCtrl,
      description: this.descriptionCtrl
    })
   }

  deleteProduct(productName) {
    let index = null;
   for(let i = 0; i < this.products.length; i++) {
    if(productName === this.products[i].name) {
      index = i;
    }
   }
    this.products.splice(index, 1);
  }
  toggleFormulaire(){
    if(this.show === false) {
      this.show = true
    } 
    return this.show;
  }
  register() {
    this.show = false;
    this.productsService.add(this.productGroup.value);
    this.reset()    
  }
  reset() {
    this.nameCtrl.setValue('');
    this.supplierCtrl.setValue('');
    this.ageCtrl.setValue('');
    this.descriptionCtrl.setValue('');
  }
  ngOnInit() {
    this.products = this.productsService.list();
    
  }

}
