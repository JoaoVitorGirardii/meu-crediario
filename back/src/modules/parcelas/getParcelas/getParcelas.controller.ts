import { Request, Response } from 'express'
import { GetParcelasUseCase } from './getParcelas.useCase';

class GetParcelas {
    
    async handle(request: Request,response: Response) {
        
        try {

            const useCase = new GetParcelasUseCase();
            
            const contrato = request.query.contrato as string

            const result = await useCase.execute({contrato})
            
            return response.json(result)
        } catch (err) {
            return response.status(400).json(`Erro ao buscar dados ${err}`)
        }
    }
}

export const ParcelasController = { GetParcelas }