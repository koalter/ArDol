import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConversorDolar } from '../../models/ConversorDolar';
import { CONSTANTS } from '../../../assets/constants';

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
  dinero: ConversorDolar;
  valor: number;

  constructor() { }

  ngOnInit(): void {
    this.dinero = new ConversorDolar();

    this.exchangeRates.subscribe(rates => {
      const multiplicador = 1 + CONSTANTS.MULTIPLICADOR_IMPUESTO_GANANCIAS + CONSTANTS.MULTIPLICADOR_IMPUESTO_PAIS;
      switch (this.currency.toUpperCase()) {
        case CONSTANTS.ARGENTINA_COUNTRY_CODE:
          this.header = 'Pesos a Dolares';
          this.dinero.exchangeRate = [
            1/parseInt(rates.currencies_alternatives[CONSTANTS.VALOR_OFICIAL_KEY]),
            1/(parseInt(rates.currencies_alternatives[CONSTANTS.VALOR_OFICIAL_KEY]) * multiplicador),
            1/parseInt(rates.currencies_alternatives[CONSTANTS.VALOR_BLUE_KEY])
          ];
          break;
        case CONSTANTS.USA_COUNTRY_CODE:
          this.header = 'Dolares a Pesos';
          this.dinero.exchangeRate = [
            parseInt(rates.currencies_alternatives[CONSTANTS.VALOR_OFICIAL_KEY]),
            parseInt(rates.currencies_alternatives[CONSTANTS.VALOR_OFICIAL_KEY]) * multiplicador,
            parseInt(rates.currencies_alternatives[CONSTANTS.VALOR_BLUE_KEY])
          ];
          break;
      }
    });
  }
}
