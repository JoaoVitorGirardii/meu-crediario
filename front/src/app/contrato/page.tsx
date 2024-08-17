'use client'
import { Button } from "@/components/ui/button";
import { DialogContrato } from "@/components/dialog-contrato";
import useContratos from "@/hooks/useContratos";
import dayjs from "dayjs";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import { DialogEndividamento } from "@/components/dialog-endividamento";
import { RowContrato } from "@/components/row-contrato";
import { Input } from "@/components/ui/input";
import { filtroContratos } from "@/lib/utils";

export default function Contrato() {

    const contratos = useContratos({data: "desc"})
    const [openModalContrato, setOpenModalContrato] = useState(false)
    const [contratoSelecionado, setContratoSelecionado] = useState("")
    const [openModalEndividamento, setOpenModalEndividamento] = useState(false)
    const [search, setSearch] = useState("")
    const performanceSearch = useDeferredValue(search)
    const [mes, setMes] = useState("")

    function onClickOpenModalParcelas(contrato_id: string){
        setContratoSelecionado(contrato_id)
        setOpenModalContrato(true)
    }

    function onClickOpenModalEndividamento(mes_selecionado: Date){
        const mesAno = (dayjs(mes_selecionado).month() + 1)  + "/" + dayjs(mes_selecionado).year()
        setMes(mesAno)
        setOpenModalEndividamento(true)
    }    

    const contratosFiltrados = useMemo(
        () => filtroContratos(contratos, performanceSearch),
        [contratos, performanceSearch]
      );

    return (
        <div className="flex col-span-12 flex-col w-full h-lvh pt-14 pb-12 ">
            
            <DialogContrato
                isOpen={openModalContrato}
                onChangeClose={setOpenModalContrato}
                contrato_id={contratoSelecionado}
            />

            <DialogEndividamento
                isOpen={openModalEndividamento}
                onChangeClose={setOpenModalEndividamento}
                mes={mes}
            />

            <div className="col-span-12 w-full px-4 bg-background">

                <h1 className="col-span-12"> Listagem de contratos </h1>

                <div className="mb-2 mt-4 w-1/3">
                    <Input 
                        value={search}
                        onChange={(event) => setSearch(event.currentTarget.value)}
                        placeholder="Filtre por Data ou Código..." 
                    />
                </div>

                <div className="flex w-full justify-center items-center">
                    <div className="w-full pb-32 bg-background">
                        <Suspense fallback="Carregando dados...">
                            {contratosFiltrados.map((contr) => {
                                return (
                                    <RowContrato
                                        key={contr.contrato}
                                        contrato={contr.contrato}
                                        data={contr.data}
                                        onClickEndividamento={onClickOpenModalEndividamento}
                                        onClickParcela={onClickOpenModalParcelas}    
                                    />     
                                )
                            })}
                        </Suspense>
                    </div>

                </div>

            </div>
        
        </div>
    );
}
