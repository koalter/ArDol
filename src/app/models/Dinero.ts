export class Dinero {
    protected _valor: number;
    protected _oficial: string;
    protected _solidario: string;
    protected _blue: string;

    constructor() {
        this._valor = 0;
        this._oficial = '';
        this._solidario = '';
        this._blue = '';
    }

    public setValor(valor: number) {
        this._valor = valor;
    }
    
    public setOficial(exchangeRate: number) {
        this._oficial = this._valor > 0 ? (this._valor * exchangeRate).toFixed(2) : '';
    }

    public setSolidario(exchangeRate: number) {
        this._solidario = this._valor > 0 ? (this._valor * exchangeRate).toFixed(2) : '';
    }

    public setBlue(exchangeRate: number) {
        this._blue = this._valor > 0 ? (this._valor * exchangeRate).toFixed(2) : '';
    }
    
    public get valor() : number {
        return this._valor;
    }
    
    public get oficial() : string {
        return this._oficial;
    }
    
    public get solidario() : string {
        return this._solidario;
    }
    
    public get blue() : string {
        return this._blue;
    }
    
}