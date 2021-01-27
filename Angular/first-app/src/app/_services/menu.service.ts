import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { Shop } from '../shop/shop.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
menu: Product [] = [];
shops: Shop []

shopName: string="";
shopId: string="";
  constructor() { }


showName(name: string){
  this.shopName=name;
}

  showMenu(id:string, menu: Product[]){
    this.shopId=id;
    this.menu=[];
    for(let p of menu){
      this.menu.push(p);
    }
  }

  setShops(shops1: Shop[]){
    this.shops = shops1;
  }

  getShops(): Shop[]{
    return this.shops;
  }

}
