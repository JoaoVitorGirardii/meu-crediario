-- CreateTable
CREATE TABLE "contratos" (
    "id" INTEGER NOT NULL,
    "data" DATE NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL,
    "valor_entrada" DOUBLE PRECISION NOT NULL,
    "valor_financiado" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "contratos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parcelas" (
    "id" SERIAL NOT NULL,
    "valor_vencimento" DOUBLE PRECISION NOT NULL,
    "data_vencimento" DATE NOT NULL,
    "data_ultimo_pagamento" DATE NOT NULL,
    "total_pago" DOUBLE PRECISION NOT NULL,
    "valor_financiado" DOUBLE PRECISION NOT NULL,
    "contrato_id" INTEGER NOT NULL,

    CONSTRAINT "parcelas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "parcelas" ADD CONSTRAINT "parcelas_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
