import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Dinero } from './models/Dinero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArDol';
  exchangeRates: any;
  peso: Dinero;
  dolar: Dinero;
  valorDolar: number;
  valorPeso: number;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.peso = new Dinero();
    this.dolar = new Dinero();
    this.appService.getRates().subscribe(rates => {
      this.exchangeRates = rates.currencies_alternatives;
    });
  }

  dolarAPeso() : void {
    this.dolar.setValor(this.valorDolar);
    this.dolar.setOficial(parseInt(this.exchangeRates['ar_oficial_sell']));
    this.dolar.setSolidario(parseInt(this.exchangeRates['ar_oficial_sell']) * 1.65);
    this.dolar.setBlue(parseInt(this.exchangeRates['ar_blue_sell']));
  }

  pesoADolar() : void {
    this.peso.setValor(this.valorPeso);
    this.peso.setOficial(1/parseInt(this.exchangeRates['ar_oficial_sell']));
    this.peso.setSolidario(1/parseInt(this.exchangeRates['ar_oficial_sell']) * 1.65);
    this.peso.setBlue(1/parseInt(this.exchangeRates['ar_blue_sell']));
  }
}
