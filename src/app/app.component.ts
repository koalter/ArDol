import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ArDol';
  exchangeRatesObservable: Observable<any>;
  exchangeRates: string[];

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.exchangeRatesObservable = this.appService.getRates();

    this.exchangeRatesObservable.subscribe(rates => {
      this.exchangeRates = rates.currencies_alternatives;
    });
  }

}
