'use client'
import useEndividamentoMensal from "@/hooks/useEndividamentoMensal";
import { RowMeses } from "@/components/row-meses";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Suspense, useState } from "react";
import useMaiorDivida from "@/hooks/useMaiorDivida";

export default function Desafio() {
    const [ano, setAno] = useState(2023)
    const endividamentoMensal = useEndividamentoMensal(ano)
    const maiorDivida = useMaiorDivida()

    return (
        <div className="flex col-span-12 flex-col w-full h-lvh pt-14 pb-12 ">

            <div className="col-span-12 w-full px-4 bg-background">

                <h1 className="col-span-12"> Listagem dos meses </h1>
                <h4 className="col-span-12"> Exibindo o mês mais endividado </h4>
                
                    <div>
                        <label className="font-bold">Maior divida de todos os anos: </label>                    
                        <span>{maiorDivida.dadosMes ? `${maiorDivida.dadosMes?.mes} | R$ ${maiorDivida.dadosMes?.totalDivida.toFixed(2)}` : "Carregando.."}</span>
                    </div>

                <div className="mb-2 w-1/4">
                <Select onValueChange={(val) => setAno(Number(val))} value={ano.toString()}>
                    <SelectTrigger >
                        <SelectValue placeholder="Selecione um anos" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2014">2014</SelectItem>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem defaultChecked value="2023">2023</SelectItem>
                    </SelectContent>
                </Select>

                </div>

                <div className="flex w-full justify-center items-center">
                    <div className="w-full pb-32 bg-background">
                        <Suspense fallback="Carregando...">
                            {endividamentoMensal.dados?.map((dado) => {
                                if (dado.totalDivida !== 0) {
                                    return (
                                        <RowMeses
                                            key={dado.mes}
                                            ehMesAnoMaisEndividado={dado.mes === endividamentoMensal.dadosMes.mes}
                                            dividaAtual={dado.dividaAtual.toFixed(2)}
                                            mesAnoAtual={dado.mes}
                                            totalDivida={dado.totalDivida.toFixed(2)}
                                            totalPago={dado.totalPago.toFixed(2)}
                                        />        
                                    )
                                }
                            })}
                        </Suspense>
                    </div>

                </div>

            </div>
        
        </div>
    );
}
