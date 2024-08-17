export type Contrato = {
    contrato:        string;
    data:            Date;
    valor_total:      number;
    valor_entrada:    number;
    valor_financiado: number;
}

export type Parcela = {
    valor_vencimento:     number;
    data_vencimento:      Date;
    data_ultimo_pagamento: Date;
    total_pago:           number;
    capital_aberto:       number;
}

export type Endividamento = {
    result: {
        mes: string,
        totalPago: number,
        totalDivida: number,
        dividaAtual: number
    }
}

export type EndividamentoMensal = {
    dados: Dado[];
    piorMes:  number;
    dadosMes: DadosMes;
}

export type MaiorDivida = {
    dadosMes: DadosMes;
}

export type Dado = {
    mes:         string;
    totalPago:   number;
    totalDivida: number;
    dividaAtual: number;
}

export type DadosMes = {
    mes:         string;
    totalPago:   number;
    totalDivida: number;
    dividaAtual: number;
}

