import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public mobileView: boolean;

  constructor(public http: HttpClient) {}

  public getRates(): Observable<any> {
    return this.http.get('https://www.currency-calc.com/currencies_rates.json');
  }

  public setWindowSize(width: number, height: number = null) {
    this.mobileView = width <= 450;
  }
}
