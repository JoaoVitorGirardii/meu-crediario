import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import useEndividamento from "@/hooks/useEndividamento";

type DialogEndividamentoProps = {
    isOpen: boolean,
    onChangeClose: (status: boolean) => void,
    mes: string
}

export function DialogEndividamento({isOpen, mes, onChangeClose}: DialogEndividamentoProps) {

    const endividamento = useEndividamento({mes_selecionado: mes})

    return (

        <Dialog open={isOpen} onOpenChange={onChangeClose}>
            <DialogContent className="sm:max-w-[750px] max-h-[650px] border-none rounded-none " >
            <DialogHeader className="text-center text-primary font-bold items-center prose rounded-none">
                <h1 >Divida atual referênte ao mês/ano: </h1>
                <h5>
                    {mes}
                </h5>
            </DialogHeader>
            <div className="overflow-y-auto max-h-[450px] flex flex-row items-center justify-between prose">

                <div className="text-center text-primary ">
                    <h5>Divida atual</h5>
                    <p>R${endividamento.result?.dividaAtual.toFixed(2)}</p>
                </div>
                <div className="text-center text-primary ">
                    <h5>Total da divida</h5>
                    <p>R${endividamento.result?.totalDivida.toFixed(2)}</p>
                </div>
                <div className="text-center text-primary ">
                    <h5>Total pago</h5>
                    <p>R${endividamento.result?.totalPago.toFixed(2)}</p>
                </div>
                <div className="text-center text-primary ">
                    <h5>Mês/Ano referência</h5>
                    <p>{endividamento.result?.mes}</p>
                </div>
                
                
                

            </div>
            <DialogFooter className="flex w-full">
                <div className="justify-center text-center items-center w-full">

                    <Button type="button" onClick={() => onChangeClose(false)} className="bg-primary text-white">Sair</Button>
                </div>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
  }