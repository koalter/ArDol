import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'conversor-dolar',
  templateUrl: './conversor-dolar.component.html',
  styleUrls: ['./conversor-dolar.component.css']
})
export class ConversorDolarComponent implements OnInit {
  
  exchangeRatesObservable: Observable<any>;
  exchangeRates: string[];
  toggle: boolean;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.exchangeRatesObservable = this.appService.getRates();

    this.exchangeRatesObservable.subscribe(rates => {
      this.exchangeRates = rates.currencies_alternatives;
    });
  }

  cambiarModo(modo: boolean): void {
    this.toggle = modo;
  }

}
