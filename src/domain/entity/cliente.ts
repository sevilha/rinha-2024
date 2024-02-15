export class Cliente {
    cliente: ICliente;
    
    constructor(cliente: ICliente) {
        this.cliente = cliente;
    }
}

export interface ICliente {
    id: number;
    limite: number;
    saldoInicial: number;
}