import { Parcela } from "@/lib/types";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import useParcelas from "@/hooks/useParcelas";
import dayjs from "dayjs";

type DialogContratoProps = {
    isOpen: boolean,
    onChangeClose: (status: boolean) => void,
    contrato_id: string
}

export function DialogContrato({isOpen, contrato_id, onChangeClose}: DialogContratoProps) {

    const parcelas = useParcelas({contrato: contrato_id})

    return (

        <Dialog open={isOpen} onOpenChange={onChangeClose}>
            <DialogContent className="sm:max-w-[750px] max-h-[650px] border-none rounded-none " >
            <DialogHeader className="text-center text-primary font-bold items-center prose rounded-none">
                <h1 >Pacelas do contrato Nº: </h1>
                <h5>
                    {contrato_id}
                </h5>
            </DialogHeader>
            <div className="overflow-y-auto md:max-h-[450px] ">

                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className="w-[150px] text-primary-dark">Data de vencimento</TableHead>
                            <TableHead className="text-primary-dark">Total pago</TableHead>
                            <TableHead className="text-primary-dark">Valor vencimento</TableHead>
                            <TableHead className="text-primary-dark">Data ultimo pagamento</TableHead>
                            <TableHead className="text-primary-dark text-right">Capital Aberto</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {parcelas.map(parc => {
                            return(
                                <TableRow>
                                    <TableCell className="text-primary font-medium">{ dayjs(parc.data_vencimento).format("DD/MM/YYYY") }</TableCell>
                                    <TableCell className="text-primary">{parc.total_pago}</TableCell>
                                    <TableCell className="text-primary">{parc.valor_vencimento}</TableCell>
                                    <TableCell className="text-primary">{ dayjs(parc.data_ultimo_pagamento).isValid() ? dayjs(parc.data_ultimo_pagamento).format("DD/MM/YYYY")  : null}</TableCell>
                                    <TableCell className="text-primary text-right">{parc.capital_aberto}</TableCell>
                                </TableRow>                       
                            )
                        })}
                    </TableBody>
                </Table>
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