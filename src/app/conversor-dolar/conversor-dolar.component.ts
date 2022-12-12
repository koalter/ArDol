import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../services/app.service';
import { CONSTANTS } from '../../assets/constants';

@Component({
  selector: 'conversor-dolar',
  templateUrl: './conversor-dolar.component.html',
  styleUrls: ['./conversor-dolar.component.css']
})
export class ConversorDolarComponent implements OnInit, OnDestroy {
  
  header: string = 'Calculadora de dolares';
  exchangeRatesObservable: Observable<any>;
  subscription: Subscription;
  exchangeRates: string[];
  toggle: boolean;
  AR: string = CONSTANTS.ARGENTINA_COUNTRY_CODE;
  US: string = CONSTANTS.USA_COUNTRY_CODE;

  constructor(public appService: AppService) {}
  
  ngOnInit() {
    this.exchangeRatesObservable = this.appService.getRates();
    this.subscription = this.exchangeRatesObservable.subscribe(rates => {
      this.exchangeRates = rates.currencies_alternatives;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cambiarModo(modo: boolean): void {
    this.toggle = modo;
  }

}
