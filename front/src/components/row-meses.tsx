type RowMesesProps = {
    mesAnoAtual: string,
    dividaAtual: string
    totalDivida: string,
    totalPago: string,
    ehMesAnoMaisEndividado: boolean
}

export function RowMeses({ dividaAtual, ehMesAnoMaisEndividado, mesAnoAtual, totalDivida, totalPago }: RowMesesProps) {
    return(
        <div 
            className={`text-left p-2 border  rounded-sm shadow-md shadow-gray-light mb-3 flex flex-row ${ehMesAnoMaisEndividado ? "border-danger bg-danger-lightest" : "border-gray-dark"}`}
        >
            <div className="flex-1">
                <p className={`text-sm ${ehMesAnoMaisEndividado ? "text-danger-dark" : "text-primary"} font-bold`}>mes: <span>{ mesAnoAtual }</span></p>
                <p className={`text-sm ${ehMesAnoMaisEndividado ? "text-danger-dark" : "text-primary"}`}>dividaAtual: <span>{ dividaAtual }</span></p>
                <p className={`text-sm ${ehMesAnoMaisEndividado ? "text-danger-dark" : "text-primary"}`}>totalPago: <span>{ totalPago }</span></p>
            </div>

        </div>
    )
}