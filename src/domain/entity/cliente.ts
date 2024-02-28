export class Cliente {
    
    constructor(private id: number, private limite: number, private saldoInicial: number) {
    }

    static create(data: ) {
        const {id, limit, saldoInicial } = data;
        return new Cliente()
    }
}

export interface ICliente {
    id: number;
    limite: number;
    saldoInicial: number;
}