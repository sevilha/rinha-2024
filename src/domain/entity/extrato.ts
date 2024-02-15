import { ISaldo } from "./saldo";
import { ITransacao } from "./transacao";

export class Extrato {
    extrato: IExtrato;
    constructor(extrato: IExtrato) {
        this.extrato = extrato;
    }
}

export interface IExtrato {
    saldo: ISaldo;
    ultimasTransacoes: Array<ITransacao>;
}