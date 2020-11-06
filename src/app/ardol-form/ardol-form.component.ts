import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dinero } from '../models/Dinero';

@Component({
  selector: 'ardol-form',
  templateUrl: './ardol-form.component.html',
  styleUrls: ['./ardol-form.component.css']
})
export class ArdolFormComponent implements OnInit {

  @Input() currency: string;
  @Input() exchangeRates: Observable<any>;

  parsedExchangeRates: number[];
  dinero: Dinero;
  valor: number;

  constructor() { }

  ngOnInit(): void {
    this.dinero = new Dinero();

    this.exchangeRates.subscribe(rates => {
      switch (this.currency.toUpperCase()) {
        case 'AR':
          this.parsedExchangeRates = [
            1/parseInt(rates.currencies_alternatives['ar_oficial_sell']),
            1/parseInt(rates.currencies_alternatives['ar_oficial_sell']) * 1.65,
            1/parseInt(rates.currencies_alternatives['ar_blue_sell'])
          ]
          break;
        case 'US':
          this.parsedExchangeRates = [
            parseInt(rates.currencies_alternatives['ar_oficial_sell']),
            parseInt(rates.currencies_alternatives['ar_oficial_sell']) * 1.65,
            parseInt(rates.currencies_alternatives['ar_blue_sell'])
          ]
          break;
      }
    });
  }

  convertir(): void {
    console.log(`Width: ${window.innerWidth}; Height: ${window.innerHeight}`)
    this.dinero.setValor(this.valor);
    this.dinero.setOficial(this.parsedExchangeRates[0]);
    this.dinero.setSolidario(this.parsedExchangeRates[1]);
    this.dinero.setBlue(this.parsedExchangeRates[2]);
  }
}
