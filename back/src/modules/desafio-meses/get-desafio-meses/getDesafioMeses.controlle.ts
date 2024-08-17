import { Request, Response } from 'express'
import { GetDesafioMesesUseCase } from './getDesafioMeses.useCase';

class GetDesafioMeses {
    
    async handle(request: Request,response: Response) {
        
        try {
            const { ano } = request.query;

            if (!ano) {
                return response.status(400).json('Ano é obrigatório.');
            }

            const useCase = new GetDesafioMesesUseCase();
            
            let dados = []

            for (let meses = 1; meses <= 12; meses++) {
                
                const result = await useCase.execute({ano: Number(ano), mes: Number(meses)})
                dados.push(result)
            }
            
            let piorMes = 0 
            let dadosMes 
            dados.forEach(element => {
                if (piorMes < element.dividaAtual){
                    piorMes = element.dividaAtual
                    dadosMes = element
                }
            });

            
            return response.json({dados, piorMes, dadosMes})
        } catch (err) {
            return response.status(400).json(`Erro ao buscar dados ${err}`)
        }
    }
}

export const DesafioMesessController = { GetDesafioMeses }