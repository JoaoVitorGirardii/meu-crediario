import { Request, Response } from 'express'
import { PostDebitoUseCase } from './postDebito.useCase';

class PostDebito {
    
    async handle(request: Request,response: Response) {
        
        try {

            const useCase = new PostDebitoUseCase();
            
            const ano = request.body.mes.split("/")[1]
            const mes = request.body.mes.split("/")[0]
            
            const result = await useCase.execute({ano: Number(ano), mes: Number(mes)})
            
            return response.json(result)
        } catch (err) {
            return response.status(400).json(`Erro ao buscar dados ${err}`)
        }
    }
}

export const DebitosController = { PostDebito }