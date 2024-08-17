import { prismaConnection } from "../../../connection/prismaClienteConnection"

type GetDesafioMesesProps = {
    ano: number,
    mes: number 
}

export class GetDesafioMesesUseCase {

    async execute({ ano, mes }:GetDesafioMesesProps) {

        const contratos = await prismaConnection.contratos.findMany({
            where: { 
                Parcelas: {
                    some: {
                        ano_vencimento: {
                            lte: ano
                        },
                        AND: {
                            ano_vencimento: ano,
                            AND: {
                                mes_vencimento: {
                                    lte: mes,
                                }
                            }
                        }
                    }
                }
            },
            include:{
                Parcelas: true
            },
            orderBy: {
                data: "asc"
            }
        })

        const totalDivida = contratos.reduce((total, current) => {
            return total + current.valor_total
        }, 0)

        const totalPago = contratos.reduce((total, current) => {

            return total + current.Parcelas.reduce((total, current) => {

                if (current.ano_vencimento <= ano && (current.ano_vencimento === ano && current.mes_vencimento <= mes))
                    return total + current.total_pago
                
                return total
            },0)

        }, 0)

        return {
            mes: `${mes}/${ano}`,
            totalPago,
            totalDivida,
            dividaAtual: Math.round(totalDivida - totalPago)
        }

    }
}