export class Transacao {

    transacao: ITransacao;

    constructor(transacao: ITransacao) {
        this.transacao = transacao;
    }

}

export interface ITransacao {
    valor: string;
    tipo: string;
    descricao: string;
    realizadaEm: Date;
    cliente: number;
}