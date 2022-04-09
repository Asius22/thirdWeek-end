export enum ALIMENTAZIONE{
    DIESEL, BENZINA, ELETTRICA
}

export abstract class Car{
    private _modello : string;
    private _marca : string;
    private _ruote : number;
    private _al : ALIMENTAZIONE;

    constructor (modello: string, marca : string , ruote : number, al : ALIMENTAZIONE){
        this._modello = modello;
        this._marca = marca;
        this._ruote = ruote;
        this._al = al;
    }

    get modello() : string {
        return this._modello;
    }

    set modello(modello : string) {
        this._modello = modello;
    }

    get marca() : string {
        return this._modello;
    }

    set marca(marca : string) {
        this._marca = marca;
    }

    get ruote() : number {
        return this._ruote;
    }

    set ruote(ruote: number) {
        this._ruote = ruote;
    }

    get alimentazione(){
        return this._al;
    }

    set alimentazione(alimentazione: ALIMENTAZIONE){
        this._al = alimentazione;
    }

    abstract toString() : string;
}

export class ElettricCar extends Car{
    private _autonomia : number;

    constructor (modello: string, marca : string , ruote : number, autonomia: number){
       super(modello, marca, ruote, ALIMENTAZIONE.ELETTRICA);
       this._autonomia = autonomia;
    }

    get autonomia() : number {
        return this._autonomia;
    }

    set ruote(autonomia: number) {
        this._autonomia = autonomia;
    }

    toString(): string {
        return "ElettricCar {modello= " + this.modello + 
        "marca= " + this.marca + 
        "ruote = " + this.ruote + 
        "autonomia = " + this.autonomia + 
        "tipo alimentazione = " + this.alimentazione +
        "}";
    }
}