import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    this.ageCtrl= fb.control('', Validators.required);
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
    console.log(this.productGroup.value);
    this.productsService.add(this.productGroup.value);
  }

  ngOnInit() {
    this.products = this.productsService.list();
    
  }

}
