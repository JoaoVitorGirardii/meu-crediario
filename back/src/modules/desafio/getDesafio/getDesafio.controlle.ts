import { Request, Response } from 'express'
import { GetDesafioUseCase } from './getDesafio.useCase';

class GetDesafio {
    
    async handle(request: Request,response: Response) {
        
        try {

            const useCase = new GetDesafioUseCase();
            
            if (!request.query.mes) return

            const ano = request.query.mes.toString().split("/")[1]
            const mes = request.query.mes.toString().split("/")[0]
            
            const result = await useCase.execute({ano: Number(ano), mes: Number(mes)})
            
            return response.json({result})
        } catch (err) {
            return response.status(400).json(`Erro ao buscar dados ${err}`)
        }
    }
}

export const DesafiosController = { GetDesafio }