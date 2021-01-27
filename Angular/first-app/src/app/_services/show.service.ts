import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
show: boolean = false;
currentShop: string = "";
  constructor() { }
  toggleMenuComponent(newShop: string){
    if(newShop==this.currentShop){
      this.currentShop=newShop;
      this.show=!this.show;
    }if(this.currentShop==""){
      this.show=!this.show;
      this.currentShop=newShop;
    }if(newShop!==this.currentShop){
      this.show=true;
      this.currentShop=newShop;
    }
  }
}
