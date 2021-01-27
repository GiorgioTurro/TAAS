import { Injectable } from '@angular/core';
import { MarkerService } from './marker.service';




@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeLocalePopup(data: any, drinkNumber: number): string {
    let crowdValue = "Low";
    if (drinkNumber > 25){
      crowdValue = "High"
    }else if (drinkNumber > 10){
      crowdValue = "Medium"
    }
    let waitingTime = 0;
    if (drinkNumber > 25){
      waitingTime = 15;
    }else if (drinkNumber > 18){
      waitingTime = 10;
    }else if (drinkNumber > 12){
      waitingTime = 5;
    }else if (drinkNumber > 7){
      waitingTime = 2;
    }

    return `` +
      `<div> Name: ${ data.name }</div>` +
      `<div> Type: ${ data.type }</div>` +
      `<div> Address: ${ data.address } </div>` +
      `<div> Crowding: ${ crowdValue } </div>` +
      `<div> Waiting Time: ${ waitingTime }min </div>`
  }
}
