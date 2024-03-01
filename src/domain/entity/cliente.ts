export class Cliente {
    
    constructor(private id: number, private limite: number, private saldoInicial: number) {
    }
}

export interface ICliente {
    id: number;
    limite: number;
    saldoInicial: number;
}