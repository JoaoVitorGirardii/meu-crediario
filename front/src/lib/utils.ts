import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Contrato } from "./types"
import dayjs from "dayjs"
import { useMemo } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function filtroContratos(contratos: Contrato[], search: string){
  return contratos.filter(contrato => {

    const data = dayjs(contrato.data).format('DD/MM/YYYY')
    const nrContrato = contrato.contrato

    return data.includes(search) || nrContrato.includes(search) 

  })
}