import { IConversor, IImpuesto } from './Interfaces';

export class ConversorSteam implements IConversor {
    valor: number;
    exchangeRate: number[];
    impuestos: IImpuesto[];

    constructor() {
        this.valor = null;
        this.exchangeRate = [1];
        this.impuestos = [
            {
                valor: 0.08,
                nombre: 'Impuesto PAIS'
            },
            {
                valor: 0.21,
                nombre: 'IVA'
            },
            {
                valor: 0.35,
                nombre: 'Impuesto a las Ganancias'
            },
            {
                valor: 0.02,
                nombre: 'Ingresos Brutos (AMBA)'
            }
        ]
    }
}