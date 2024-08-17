import { Router } from "express";
import { ContratosController } from "./modules/contratos/getContratos/getContratos.controller";
import { DebitosController } from "./modules/debito/postDebito/postDebito.controller";
import { DesafiosController } from "./modules/desafio/getDesafio/getDesafio.controlle";
import { DesafioMesessController } from "./modules/desafio-meses/get-desafio-meses/getDesafioMeses.controlle";
import { ParcelasController } from "./modules/parcelas/getParcelas/getParcelas.controller";
import { MarioDividaController } from "./modules/maior-divida/get-maior-divida/getMaiorDivida.controlle";

const routers = Router();

routers.get("/consultar/contrato",  new ContratosController.GetContratos().handle)
routers.get("/consultar/contrato/parcela",  new ParcelasController.GetParcelas().handle)

routers.get("/desafio", new DesafiosController.GetDesafio().handle)
routers.get("/desafio/todos", new DesafioMesessController.GetDesafioMeses().handle)
routers.get("/maiordivida", new MarioDividaController.GetMaiorDividaMeses().handle)

routers.post("/debitos", new DebitosController.PostDebito().handle)

routers.get("/", (request, response) => {
    response.status(200).send("API em execução!!!")
})

export { routers }