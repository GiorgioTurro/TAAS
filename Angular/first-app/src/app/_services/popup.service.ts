import { Injectable } from '@angular/core';
import { MarkerService } from './marker.service';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div> Nome: ${ data.properties.name }</div>` +
      `<div> Tipo: ${ data.properties.type }</div>` +
      `<div> Indirizzo: ${ data.properties.address } - ${ data.properties.city }</div>`
  }
}
