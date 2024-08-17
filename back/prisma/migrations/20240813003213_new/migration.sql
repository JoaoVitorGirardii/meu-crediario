/*
  Warnings:

  - Added the required column `ano` to the `contratos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `contratos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ano_vencimento` to the `parcelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes_vencimento` to the `parcelas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contratos" ADD COLUMN     "ano" SMALLINT NOT NULL,
ADD COLUMN     "mes" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "parcelas" ADD COLUMN     "ano_data_ultimo_pagamento" SMALLINT,
ADD COLUMN     "ano_vencimento" SMALLINT NOT NULL,
ADD COLUMN     "mes_data_ultimo_pagamento" SMALLINT,
ADD COLUMN     "mes_vencimento" SMALLINT NOT NULL;
