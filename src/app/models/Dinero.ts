export class Dinero {
    public valor: number;
    public exchangeRate: number[];

    constructor() {
        this.valor = null;
        this.exchangeRate = [];
    }
    
    public get oficial() : string {
        return this.valor > 0 ? (this.valor * this.exchangeRate[0]).toFixed(2) : '';
    }
    
    public get solidario() : string {
        return this.valor > 0 ? (this.valor * this.exchangeRate[1]).toFixed(2) : '';
    }
    
    public get blue() : string {
        return this.valor > 0 ? (this.valor * this.exchangeRate[2]).toFixed(2) : '';
    }
    
}