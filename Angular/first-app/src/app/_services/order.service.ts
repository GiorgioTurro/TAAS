import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private tokenService: TokenService, private loginService: LoginService) { }
order: Product[]=[];
product1: Product;
subtotal: number=0;
paidFor = false;
shopId: string = "";


confirmOrder(){
  const dataParams = {
  userEmail: "",
  localID: ""
  };
  dataParams.userEmail = this.loginService.user.email;
  dataParams.localID = this.shopId.toString();
  this.order.forEach((product, index) => {
    dataParams[index] = {
      drinkID: product.id.toString(),
      drinkPrice: product.price,
      drinkNumerosity: product.quantity,
    };
  });
  const headers = { 'Authorization' : 'Bearer ' + this.tokenService.getToken()}
  this.http.post<any>('http://192.168.49.2:30001/api/v1/core/save_order', dataParams , {headers}).subscribe(data => {
        console.log(data);
    })
}

getOrder(){
  return this.order;
}

onAddProduct(p: Product){
  this.paidFor = false;
  this.subtotal=0;
   let exist=0;
  for(let prod of this.order){
    if(prod.name==p.name && prod.price==p.price && prod.category==p.category){
      exist=1;
      prod.quantity++;
      console.log(this.order);
    }
  }
  if(exist===0){
    this.product1 = new Product(p.id, p.name, p.price, p.category);
    this.product1.quantity=p.quantity;
    this.order.push(this.product1);
    console.log(this.order);
  }
  for(var prod of this.order){
      this.subtotal=this.subtotal+(prod.quantity*prod.price)
    }
  console.log(this.subtotal);
  p.quantity=0;
  console.log(this.order)
}

onEmptyOrder(){
  this.order=[];
  this.subtotal=0.00;
  console.log(this.subtotal);
  console.log(this.order);
}

reduceFromOrder(p: Product){
  for(let prod of this.order){
    if(prod.name==p.name && prod.price==p.price && prod.category==p.category){
      if(prod.quantity==1){
        this.removeFromOrder(prod);
      }else{
        prod.quantity--;
        this.subtotal=this.subtotal-prod.price;
      }
      console.log(this.order);
    }
  }
}

removeFromOrder(p: Product){
  this.subtotal=this.subtotal-(p.quantity*p.price);
  this.order = this.order.filter(obj => obj !== p);
}

onGetQty(p:Product){
  let q = 0;
  if (typeof this.order !== 'undefined' && this.order.length > 0){
    for (let prod of this.order){
      if(prod.name==p.name && prod.price == p.price && prod.category == p.category){
        q = prod.quantity;
        break;
      }
    }
  }
  return q;
}

}
