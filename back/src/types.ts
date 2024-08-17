export type Contratos = {
    contratos: Contrato[];
}

export type Contrato = {
    parcelas:        Parcela[];
    contrato:        string;
    data:            Date;
    valortotal:      number;
    valorentrada:    number;
    valorfinanciado: number;
}

export type Parcela = {
    valorvencimento:     number;
    datavencimento:      Date;
    dataultimopagamento: Date;
    totalpago:           number;
    capitalaberto:       number;
}

export type OrderBy = "asc" | "desc"