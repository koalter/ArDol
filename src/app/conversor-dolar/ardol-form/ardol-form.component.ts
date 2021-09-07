import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dinero } from '../../models/Dinero';

@Component({
  selector: 'ardol-form',
  templateUrl: './ardol-form.component.html',
  styleUrls: ['./ardol-form.component.css']
})
export class ArdolFormComponent implements OnInit {

  @Input() currency: string;
  @Input() exchangeRates: Observable<any>;

  header: string;
  parsedExchangeRates: number[];
  dinero: Dinero;
  valor: number;

  constructor() { }

  ngOnInit(): void {
    this.dinero = new Dinero();

    this.exchangeRates.subscribe(rates => {
      switch (this.currency.toUpperCase()) {
        case 'AR':
          this.header = 'Pesos a Dolares';
          this.dinero.exchangeRate = [
            1/parseInt(rates.currencies_alternatives['ar_oficial_sell']),
            1/(parseInt(rates.currencies_alternatives['ar_oficial_sell']) * 1.65),
            1/parseInt(rates.currencies_alternatives['ar_blue_sell'])
          ];
          break;
        case 'US':
          this.header = 'Dolares a Pesos';
          this.dinero.exchangeRate = [
            parseInt(rates.currencies_alternatives['ar_oficial_sell']),
            parseInt(rates.currencies_alternatives['ar_oficial_sell']) * 1.65,
            parseInt(rates.currencies_alternatives['ar_blue_sell'])
          ];
          break;
      }
    });
  }
}
