import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IImpuesto } from './models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public mobileView: boolean;

  constructor(public http: HttpClient) {}

  // TODO mover a un servicio dedicado (DolarService)
  public getRates(): Observable<any> {
    return this.http.get('https://www.currency-calc.com/currencies_rates.json');
  }

  public setWindowSize(width: number, height: number = null) {
    this.mobileView = width <= 450;
  }

  // TODO mover a un servicio dedicado (SteamService)
  public getMontoSteam(montoInicial: number, impuestos: IImpuesto[]): number {
    let montoFinal = montoInicial;
    
    for (let impuesto of impuestos) {
      montoFinal += montoInicial * impuesto.valor;
    }

    return montoFinal;
  }

  public calcularImpuesto(base: number, impuesto: IImpuesto) {
    return base * impuesto.valor;
  }
}
