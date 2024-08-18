'use client'
import { Contrato } from "@/lib/types";
import { API } from "@/server/API";
import { useCallback, useEffect, useState } from "react";

type useContratosProps = {
    data?: "desc" | "asc"
}

export default function useContratos({ data = "desc" }: useContratosProps) {
    
    const [contratos, setContratos] = useState<Contrato[]>([])
    
    const getContratos = useCallback(
        async () => {
            API.get<Contrato[]>("/consultar/contrato", { params: {
                data
            }}).then(({data}) => {
                console.log(data); 
                setContratos(data)
            }).catch(erro => {
                console.log(erro);  
            })
        }
    , [])

    useEffect(() => {
        getContratos()
    }, [])

    return contratos
}