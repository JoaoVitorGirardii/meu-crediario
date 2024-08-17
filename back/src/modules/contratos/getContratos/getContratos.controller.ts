import { Request, Response } from 'express'
import { GetContatosUseCase } from './getContratos.useCase';
import { OrderBy } from '../../../types';

class GetContratos {
    
    async handle(request: Request,response: Response) {
        
        try {

            const useCase = new GetContatosUseCase();
            
            const orderByContrato = request.query.contrato as OrderBy
            const orderByData = request.query.data as OrderBy

            const result = await useCase.execute({order: {data: orderByData, contrato: orderByContrato}})
            
            return response.json(result)
        } catch (err) {
            return response.status(400).json(`Erro ao buscar dados ${err}`)
        }
    }
}

export const ContratosController = { GetContratos }