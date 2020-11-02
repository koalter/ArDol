import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) {}

  public getRates(): Observable<any> {
    return this.http.get('https://www.currency-calc.com/currencies_rates.json');
  }
}
