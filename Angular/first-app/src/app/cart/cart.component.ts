import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Product } from '../shared/product.model';
import { ButtonModule } from 'primeng/button';
declare var paypal;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
discount: string ="";

  constructor(public orderService: OrderService) {
  }
//
  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Drink Take-Away",
              amount: {
                currency_code: 'EUR',
                value: this.orderService.subtotal
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.orderService.paidFor=true;
        this.orderService.confirmOrder();
        console.log(order);
        this.onEmptyCart();
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }
  onEmptyCart(){
  return this.orderService.onEmptyOrder();
  }

  onRemoveProduct(p: Product){
    return this.orderService.removeFromOrder(p);
  }

}
