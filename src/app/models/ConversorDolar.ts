import { IConversor } from "./Interfaces";

export class ConversorDolar implements IConversor {
    public valor: number;
    public exchangeRate: number[];

    constructor() {
        this.valor = null;
        this.exchangeRate = [];
    }
    
    public get oficial() : string {
        return this.valor > 0 ? (this.valor * this.exchangeRate[0]).toString() : '';
    }
    
    public get solidario() : string {
        return this.valor > 0 ? (this.valor * this.exchangeRate[1]).toString() : '';
    }
    
    public get blue() : string {
        return this.valor > 0 ? (this.valor * this.exchangeRate[2]).toString() : '';
    }
    
}