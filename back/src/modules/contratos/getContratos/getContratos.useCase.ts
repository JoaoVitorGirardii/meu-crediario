import { prismaConnection } from "../../../connection/prismaClienteConnection"
import { OrderBy } from "../../../types"

type GetContratosProps = {
    order?: {
        data: OrderBy,
        contrato: OrderBy
    }
}

export class GetContatosUseCase {

    async execute({ order }: GetContratosProps) {

        const contratos = await prismaConnection.contratos.findMany({
            // include: {
            //     Parcelas: true
            // },
            orderBy: {
                data: order?.data,
                contrato: order?.contrato
            }
        })
        
        return contratos

    }
}