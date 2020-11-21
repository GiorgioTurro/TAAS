import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './popup.service';
import * as L from 'leaflet'


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/locali.geojson';
  constructor(private http: HttpClient, private popupService: PopUpService) { }

  makeCapitalMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]);
        marker.bindPopup(this.popupService.makeCapitalPopup(c)).addTo(map);
      }
    });
  }

}
