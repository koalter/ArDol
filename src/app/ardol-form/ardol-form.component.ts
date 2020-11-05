import { Component, Input, OnInit } from '@angular/core';
import { Dinero } from '../models/Dinero';

@Component({
  selector: 'ardol-form',
  templateUrl: './ardol-form.component.html',
  styleUrls: ['./ardol-form.component.css']
})
export class ArdolFormComponent implements OnInit {

  @Input() currency: string;
  @Input() exchangeRates: string[];

  parsedExchangeRates: number[];
  dinero: Dinero;
  valor: number;

  constructor() { }

  ngOnInit(): void {
    this.dinero = new Dinero();
    console.log(this.exchangeRates);
    
    switch (this.currency.toUpperCase()) {
      case 'AR':
        this.parsedExchangeRates = [
          1/parseInt(this.exchangeRates['ar_oficial_sell']),
          1/parseInt(this.exchangeRates['ar_oficial_sell']) * 1.65,
          1/parseInt(this.exchangeRates['ar_blue_sell'])
        ]
        break;
      case 'US':
        this.parsedExchangeRates = [
          parseInt(this.exchangeRates['ar_oficial_sell']),
          parseInt(this.exchangeRates['ar_oficial_sell']) * 1.65,
          parseInt(this.exchangeRates['ar_blue_sell'])
        ]
        break;
    }
  }

  convertir(): void {
    this.dinero.setValor(this.valor);
    this.dinero.setOficial(this.parsedExchangeRates[0]);
    this.dinero.setSolidario(this.parsedExchangeRates[1]);
    this.dinero.setBlue(this.parsedExchangeRates[2]);
  }
}
