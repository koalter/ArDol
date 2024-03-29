import { Component, OnInit } from '@angular/core';
import { ConversorSteam } from '../models/ConversorSteam';
import { IImpuesto } from '../models/Interfaces';
import { SteamService } from '../services/steam.service';
import { CONSTANTS } from '../../assets/constants';

@Component({
  selector: 'conversor-steam',
  templateUrl: './conversor-steam.component.html',
  styleUrls: ['./conversor-steam.component.css']
})
export class ConversorSteamComponent implements OnInit {

  header: string = 'Calculadora para compras digitales';
  conversor: ConversorSteam;
  currency: string;
  amba: boolean = true;
  impuestos: IImpuesto[];
  
  get tooltip(): string {
    let texto = `Monto Inicial + 23% Impuesto PAIS + 21% IVA + 45% Ganancias`;

    if (this.amba) {
      texto += ` + 2% IIBB (AMBA)`
    }

    return texto;
  }

  constructor(public steamService: SteamService) { }

  ngOnInit(): void {
    this.conversor = new ConversorSteam();
    this.currency = CONSTANTS.ARGENTINA_COUNTRY_CODE;
    this.impuestos = this.conversor.impuestos;
  }

  filtrarImpuestos(): void {
    this.impuestos = !this.amba ? 
      this.conversor.impuestos 
      : this.conversor.impuestos.filter(impuesto => !impuesto.nombre.includes('AMBA'));
  }

  calcularMonto(): string {
    return this.conversor.valor ? 
      this.steamService.getMontoSteam(this.conversor.valor, this.impuestos).toString() 
      : '';
  }

  calcularImpuesto(impuesto: IImpuesto): string {
    return this.steamService.calcularImpuesto(this.conversor.valor, impuesto).toString();
  }
}
