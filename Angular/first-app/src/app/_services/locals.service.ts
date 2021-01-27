import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class LocalsService {

  constructor(private http: HttpClient) {}

  callGetLocals(): void

}
