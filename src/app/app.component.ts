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
  width: number;
  height: number;
  isMobile: boolean;
  mobileModo: boolean;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMobile = this.width <= 360;
    console.log(this.isMobile);
    console.log(this.mobileModo);
    
    this.exchangeRatesObservable = this.appService.getRates();

    this.exchangeRatesObservable.subscribe(rates => {
      this.exchangeRates = rates.currencies_alternatives;
    });
  }

  cambiarModo(modo: boolean): void {
    this.mobileModo = modo;
    console.log(this.mobileModo);
  }

}
