import { environment } from '../environments/environment';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArDol';
  json: any;
  valorDolar: string;
  valorDolarOficial: string;
  valorDolarSolidario: string;
  valorDolarBlue: string;
  valorPeso: string;
  valorPesoOficial: string;
  valorPesoSolidario: string;
  valorPesoBlue: string;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getRates().subscribe(rates => {
      this.json = rates.currencies_alternatives;
    });
  }

  dolarAPeso() : void {
    if (this.valorDolar) {
      this.valorDolarOficial = (parseInt(this.valorDolar) * this.json['ar_oficial_sell']).toFixed(2);
      this.valorDolarSolidario = (parseInt(this.valorDolar) * (this.json['ar_oficial_sell'] * 1.65)).toFixed(2);
      this.valorDolarBlue = (parseInt(this.valorDolar) * this.json['ar_blue_sell']).toFixed(2);
  
    }
    else {
      this.valorDolarOficial = '';
      this.valorDolarSolidario = '';
      this.valorDolarBlue = '';
    }

    if (!environment.production) {
      console.log(`Oficial: ${this.valorDolarOficial}`);
      console.log(`Solidario: ${this.valorDolarSolidario}`);
      console.log(`Blue: ${this.valorDolarBlue}`);
    }
  }

  pesoADolar() : void {
    if (this.valorPeso) {
      this.valorPesoOficial = (parseInt(this.valorPeso) * 1/this.json['ar_oficial_sell']).toFixed(2);
      this.valorPesoSolidario = (parseInt(this.valorPeso) * 1/(this.json['ar_oficial_sell'] * 1.65)).toFixed(2);
      this.valorPesoBlue = (parseInt(this.valorPeso) * 1/this.json['ar_blue_sell']).toFixed(2);
  
    }
    else {
      this.valorPesoOficial = '';
      this.valorPesoSolidario = '';
      this.valorPesoBlue = '';
    }

    if (!environment.production) {
      console.log(`Oficial: ${this.valorPesoOficial}`);
      console.log(`Solidario: ${this.valorPesoSolidario}`);
      console.log(`Blue: ${this.valorPesoBlue}`);
    }
  }
}
