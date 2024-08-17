import { prismaConnection } from "../../../connection/prismaClienteConnection"

type GetParcelasProps = {
    contrato: string
}

export class GetParcelasUseCase {

    async execute({ contrato }: GetParcelasProps) {
        const parcelas = await prismaConnection.parcelas.findMany({
            where: {
                contrato_id: contrato 
            },
            orderBy: {
                data_vencimento: "desc"
            }
        })
        
        return parcelas

    }
}