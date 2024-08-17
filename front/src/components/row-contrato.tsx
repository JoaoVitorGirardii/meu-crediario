import dayjs from "dayjs";
import { Button } from "./ui/button";
import { useMemo } from "react";

type RowContratoProps = {
    data: Date,
    contrato: string,
    onClickEndividamento: (data: Date) => void,
    onClickParcela: (contrato: string) => void
}

export function RowContrato({data, contrato, onClickEndividamento, onClickParcela}: RowContratoProps){
    return(
        <div className="text-left p-2 border border-gray-dark shadow-sm shadow-gray-light rounded-sm mb-3 sm:flex">
            <div className="flex-1">
                <p className="text-sm text-primary font-bold">Data: <span>{ dayjs(data).format("DD/MM/YYYY") }</span></p>
                <p className="text-sm ">Codigo: <span>{ contrato }</span></p>
            </div>

            <div className="flex items-center gap-1 ">
                <Button className="bg-primary-light text-white" onClick={() => onClickEndividamento(data)}>Endividamento</Button>
                <Button className="bg-primary text-white" onClick={() => onClickParcela(contrato)}>Parcelas</Button>
            </div>

        </div>
    )
}