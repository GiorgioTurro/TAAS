import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenDto } from '../models/token-dto';


const cabecera = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class OauthService {

  oauthURL = 'http://localhost:7777/oauth/';

  constructor(private httpClient: HttpClient) { }

  public google(tokenDto: TokenDto): Observable<TokenDto> {
    console.log(tokenDto);
    return this.httpClient.post<TokenDto>(this.oauthURL + 'google', tokenDto, cabecera);
  }

  public facebook(tokenDto: TokenDto): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>(this.oauthURL + 'facebook', tokenDto, cabecera);
  }
}
