import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ConversorSteam } from '../models/ConversorSteam';
import { IImpuesto } from '../models/Interfaces';

@Component({
  selector: 'conversor-steam',
  templateUrl: './conversor-steam.component.html',
  styleUrls: ['./conversor-steam.component.css']
})
export class ConversorSteamComponent implements OnInit {

  header: string = 'Calculadora para Steam';
  conversor: ConversorSteam;
  currency: string;
  amba: boolean = true;
  impuestos: IImpuesto[];
  
  get tooltip(): string {
    let texto = `Monto Inicial + 8% Impuesto PAIS + 21% IVA + 35% Ganancias`;

    if (this.amba) {
      texto += ` + 2% IIBB (AMBA)`
    }

    return texto;
  }

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.conversor = new ConversorSteam();
    this.currency = 'AR';
    this.impuestos = this.conversor.impuestos;
  }

  filtrarImpuestos(): void {
    this.impuestos = !this.amba ? 
      this.conversor.impuestos 
      : this.conversor.impuestos.filter(impuesto => !impuesto.nombre.includes('AMBA'));
  }

  calcularMonto(): string {
    return this.conversor.valor ? 
      this.appService.getMontoSteam(this.conversor.valor, this.impuestos).toFixed(2) 
      : '';
  }

  calcularImpuesto(impuesto: IImpuesto): string {
    return this.appService.calcularImpuesto(this.conversor.valor, impuesto).toFixed(2);
  }
}
