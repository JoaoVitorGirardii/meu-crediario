import { prismaConnection } from "../../../connection/prismaClienteConnection"

type PostDebitoProps = {
    ano: number,
    mes: number 
}

export class PostDebitoUseCase {

    async execute({ ano, mes }:PostDebitoProps) {

        const contratos = await prismaConnection.contratos.findMany({
            where: { mes, ano },
            include: {
                Parcelas: true
            }
        })
        
        const totalMes = contratos.reduce((total, current) => {
            return total + current.valor_total
        }, 0)

        return {
            mes: `${mes}/${ano}`,
            total: totalMes
        }

    }
}