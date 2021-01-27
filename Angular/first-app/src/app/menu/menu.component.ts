import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { Shop } from '../shop/shop.model';
import { TableModule } from 'primeng/table';
import { Product } from '../shared/product.model';
import { OrderService } from "../_services/order.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Product [] = [];

  constructor(public menuService: MenuService, public orderService: OrderService) { }

  ngOnInit(): void {
  }

  decreaseAmount(p:Product){
    return this.orderService.reduceFromOrder(p);
  }

  increaseAmount(p:Product){
    p.quantity=p.quantity+1;
    return this.onAddToOrder(p);
  }

  onAddToOrder(p: Product){
    this.orderService.shopId = this.menuService.shopId;
    return this.orderService.onAddProduct(p);
  }

  getProductQuantity(p: Product){
    return this.orderService.onGetQty(p);
  }

}
