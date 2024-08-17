/*
  Warnings:

  - Added the required column `capital_aberto` to the `parcelas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "parcelas" ADD COLUMN     "capital_aberto" INTEGER NOT NULL;
