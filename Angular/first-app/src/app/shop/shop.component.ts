import { Component, OnInit } from '@angular/core';
import { Shop } from './shop.model';
import { TableModule } from 'primeng/table';
import { Product } from './shared/product.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shops: Shop[];
selectedShop: Shop;
menu: Product[];
menu2: Product[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.menu=[
      new Product('Bulldog', 3.50, 'Birra doppio malto', 'Birra'),
      new Product('Primitivo di Manduria', 8.00, 'Vino rosso', 'Vino')
    ]
    this.menu2=[
      new Product('4 Luppoli', 3.00, 'Birra Lager', 'Birra')
    ]
    this.shops=[
      new Shop('Jumping', 'Via Roma, 102', 'Torino', this.menu),
      new Shop('Giorgi8', 'Via Giorgione, 59', 'Torino', this.menu),
      new Shop('Paradiso Brugola', 'Piazza delle Armi, 3', 'Torino', this.menu2),
      new Shop('Shot', 'Via Gianfrancesco Bellezia, 15', 'Torino', this.menu),
      new Shop('Birbe di Pollo Store', 'Via Dei Polli, 13', 'Torino', this.menu),
      new Shop('Un Altro', 'Viale Altrove, 99', 'Torino', this.menu)
    ];
  this.selectedShop=this.shops[0];
  }

  onAddToOrder(p: Product){
    return this.orderService.onAddProduct(p);
  }




}
