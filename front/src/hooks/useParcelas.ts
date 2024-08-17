'use client'
import { Parcela } from "@/lib/types";
import { API } from "@/server/API";
import { useEffect, useState } from "react";

type useParcelasProps = {
    contrato: string
}

export default function useParcelas({ contrato }: useParcelasProps) {
    
    const [parcelas, setParcelas] = useState<Parcela[]>([])
    
    async function getParcelas() {
        API.get<Parcela[]>("/consultar/contrato/parcela", { params: {
            contrato
        }}).then(({data}) => {
            setParcelas(data)
        })
    }

    useEffect(() => {
        getParcelas()
    }, [contrato])

    return parcelas
}