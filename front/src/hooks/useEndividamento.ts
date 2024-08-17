'use client'
import { Endividamento } from "@/lib/types";
import { API } from "@/server/API";
import { useCallback, useEffect, useState } from "react";

type useEndividamentoProps = {
    mes_selecionado: string
}

export default function useEndividamento({ mes_selecionado }: useEndividamentoProps) {
    
    const [endividamento, setEndividamento] = useState<Endividamento>({} as Endividamento)
    
    const getEndividamento = useCallback( 
        async () => {
            API.get<Endividamento>("/desafio", { params: {
                mes: mes_selecionado
            }}).then(({data}) => {
                setEndividamento(data)
            })
        }
    , [mes_selecionado])

    useEffect(() => {
        getEndividamento()
    }, [mes_selecionado])

    return endividamento
}