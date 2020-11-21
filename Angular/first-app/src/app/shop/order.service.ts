import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
order: Product[]=[];

getOrder(){
  return this.order;
}

onAddProduct(p: Product){
   var exist=false;
  for(var prod of this.order){
    if(prod.name==p.name && prod.price==p.price && prod.description==p.description && prod.category==p.category){
      exist=true;
      prod.quantity=p.quantity;
    }
  }
  if(exist==false){
    this.order.push(p);
    console.log(this.order);
  }
  p.quantity=0;
  exist=false;
}

onEmptyOrder(){
  this.order=[];
  console.log(this.order);
}

onCalculateSubtotal(){
  let subtotal = 0.00;
  for(var prod of this.order){
    subtotal=subtotal+(prod.quantity*prod.price)
  }
  console.log(subtotal);
  return subtotal;
}

}
