import { Request, Response } from 'express'
import { GetMaiorDividaUseCase } from './getMeiorDivida.useCase';

class GetMaiorDividaMeses {
    
    async handle(request: Request,response: Response) {
        
        try {

            const useCase = new GetMaiorDividaUseCase();
            
            let dados = []

            for (let ano = 2014; ano <= 2023; ano++) {
                
                for (let meses = 1; meses <= 12; meses++) {
                    
                    const result = await useCase.execute({ano: Number(ano), mes: Number(meses)})
                    dados.push(result)
                }
            }
            
            let piorMes = 0 
            let dadosMes 
            dados.forEach(element => {
                if (piorMes < element.dividaAtual){
                    piorMes = element.dividaAtual
                    dadosMes = element
                }
            });

            
            return response.json({piorMes, dadosMes})
        } catch (err) {
            return response.status(400).json(`Erro ao buscar dados ${err}`)
        }
    }
}

export const MarioDividaController = { GetMaiorDividaMeses }