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
    this.setWindowSize(window.innerWidth, window.innerHeight);
    
    this.exchangeRatesObservable = this.appService.getRates();

    this.exchangeRatesObservable.subscribe(rates => {
      this.exchangeRates = rates.currencies_alternatives;
    });
  }

  cambiarModo(modo: boolean): void {
    this.mobileModo = modo;
  }

  onResize(event) {
    this.setWindowSize(event.target.innerWidth, event.target.innerHeight);
  }

  setWindowSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.isMobile = width <= 450;
  }
}
