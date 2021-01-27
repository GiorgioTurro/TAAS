import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './popup.service';
import * as L from 'leaflet'
import { OrderService } from './order.service';
import { MenuService } from './menu.service';
import { ShowService } from './show.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient, private popupService: PopUpService, private orderService: OrderService, private menuService: MenuService, public showService: ShowService, public tokenService: TokenService) { }



  makeLocalsMarkers(map: L.map): void {
    let LocalIcon = L.Icon.extend({
      options: {
        iconUrl: '',
        iconSize: [30, 30]
      }
  });
    let pub = new LocalIcon({iconUrl: '/assets/images/beer.png', iconSize: [26, 26]});
    let cocktail = new LocalIcon({iconUrl: '/assets/images/cocktail.png'});
    let wine = new LocalIcon({iconUrl: '/assets/images/wine.png'});

    const headers = { 'Authorization' : 'Bearer ' + this.tokenService.getToken()}
    this.http.get('http://192.168.49.2:30001/api/v1/local/get_all_locals').subscribe((res: any) => {
      for (const c of res) {
        let icon;
        if(c.type == 'pub'){
          icon = pub;
        }else if (c.type == 'cocktail bar'){
          icon = cocktail;
        }else if (c.type == 'wine bar'){
          icon = wine;
        }
        this.http.get('http://192.168.49.2:30001/api/v1/core/get_drink_quantity_to_do/' + c.id,{headers}).subscribe((drinkNumber:any) => {
          console.log("drink quantity");
          const lat = c.lat;
          const lon = c.lon;
          let marker = L.marker([lat,lon], {icon: icon, title:c.name});
          marker.bindPopup(this.popupService.makeLocalePopup(c, drinkNumber)).on("click", e => {
            let shops = this.menuService.getShops();
            for (const shop of shops){
              console.log(shop.name);
              console.log(e.sourceTarget.options.title)
              if (shop.name == e.sourceTarget.options.title){
                this.menuService.showName(shop.name);
                this.menuService.showMenu(shop.id, shop.menu);
                this.orderService.onEmptyOrder();
                this.showService.toggleMenuComponent(shop.name);
              }
            }
          }).addTo(map);
        });
      }
    });
  }

}
