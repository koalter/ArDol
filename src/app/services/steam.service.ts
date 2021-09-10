import { Injectable } from '@angular/core';
import { IImpuesto } from '../models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  constructor() { }

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
