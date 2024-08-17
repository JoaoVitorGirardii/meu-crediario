'use client'
import { EndividamentoMensal } from "@/lib/types";
import { API } from "@/server/API";
import { useEffect, useState } from "react";

export default function useEndividamentoMensal(ano: number) {
    
    const [endividamentoMensal, setEndividamentoMensal] = useState<EndividamentoMensal>({} as EndividamentoMensal)
    
    async function getEndividamentoMensal(ano: number) {
        API.get<EndividamentoMensal>("/desafio/todos", {params: {
            ano
        }})
        .then(({data}) => {
            setEndividamentoMensal(data)
        })
    }

    useEffect(() => {
        getEndividamentoMensal(ano)
    }, [ano])

    return endividamentoMensal
}