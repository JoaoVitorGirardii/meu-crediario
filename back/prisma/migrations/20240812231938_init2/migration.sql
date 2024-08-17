/*
  Warnings:

  - The primary key for the `contratos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `contratos` table. All the data in the column will be lost.
  - Added the required column `contrato` to the `contratos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "parcelas" DROP CONSTRAINT "parcelas_contrato_id_fkey";

-- AlterTable
ALTER TABLE "contratos" DROP CONSTRAINT "contratos_pkey",
DROP COLUMN "id",
ADD COLUMN     "contrato" TEXT NOT NULL,
ADD CONSTRAINT "contratos_pkey" PRIMARY KEY ("contrato");

-- AlterTable
ALTER TABLE "parcelas" ALTER COLUMN "contrato_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "parcelas" ADD CONSTRAINT "parcelas_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos"("contrato") ON DELETE RESTRICT ON UPDATE CASCADE;
