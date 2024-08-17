'use client'
import { MaiorDivida } from "@/lib/types";
import { API } from "@/server/API";
import { useEffect, useState } from "react";

export default function useMaiorDivida() {
    
    const [maiorDivida, setMaiorDivida] = useState<MaiorDivida>({} as MaiorDivida)
    
    async function getMaiorDivida() {
        API.get<MaiorDivida>("/maiordivida")
        .then(({data}) => {
            console.log(data)
            
            setMaiorDivida(data)
        })
    }

    useEffect(() => {
        getMaiorDivida()
    }, [])

    return maiorDivida
}