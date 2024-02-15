export class Saldo {
    saldo: ISaldo;
    constructor(saldo: ISaldo) {
        this.saldo = saldo;
    }
}

export interface ISaldo {
    total: number;
    dataExtrato: string;
    limite: number;
    cliente: number;
}