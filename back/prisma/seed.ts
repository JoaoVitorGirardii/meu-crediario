import { prismaConnection } from "../src/connection/prismaClienteConnection"
import * as fs from 'fs';
import { Contratos } from "../src/types";

async function main() {

    try {
        const data = fs.readFileSync('./historico-maria.json', { encoding: 'utf-8', flag: 'r' });
        const jsonData = JSON.parse(data) as Contratos;
        const itens = jsonData.contratos 

        itens.forEach(async (contrato) => {
            const date = new Date(contrato.data)
            await prismaConnection.contratos.create({
                data: {
                    contrato: contrato.contrato,
                    data: date,
                    ano: date.getFullYear(),
                    mes: date.getMonth() + 1,
                    valor_entrada: contrato.valorentrada,
                    valor_financiado: contrato.valorfinanciado,
                    valor_total: contrato.valortotal
                }
            });
            
            contrato.parcelas.forEach(async (parcela) => {
                const dateVencimento = new Date(parcela.datavencimento) 
                const datePagamento = new Date(parcela.dataultimopagamento) 
                await prismaConnection.parcelas.create({
                    data: {
                        contrato_id: contrato.contrato,
                        data_ultimo_pagamento: parcela.dataultimopagamento ? datePagamento : null,
                        mes_data_ultimo_pagamento: parcela.dataultimopagamento ? datePagamento.getMonth() : null,
                        ano_data_ultimo_pagamento: parcela.dataultimopagamento ? datePagamento.getFullYear() : null,
                        data_vencimento: dateVencimento,
                        ano_vencimento: dateVencimento.getFullYear(),
                        mes_vencimento: dateVencimento.getMonth(),
                        total_pago: parcela.totalpago,
                        valor_vencimento: parcela.valorvencimento,
                        capital_aberto: parcela.capitalaberto
                    }
                })
            });
        });

    } catch (error) {
        console.error('Inserir registros:', error);
    }

  }

  main()
    .then(async () => {
      await prismaConnection.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prismaConnection.$disconnect()
      process.exit(1)
    })