import Image from "next/image";
import logo from "@/assets/logo-meu-crediario-2023.svg";

export default function Home() {
    console.log("API BACKEND HOME: ", process.env.BACKEND_URL)
    return (
        <div className="flex col-span-12 flex-col w-full prose p-4 pt-16 bg-background">
            <Image src={logo} alt="" height={100} className="mb-4" />
            <h2>Sistema desenvolvido para a realização do teste técnico.</h2>
            <div className="pl-4">
                <p>O sistema consiste em duas partes: <b>FRONT-END</b> e <b>BACK-END</b>.</p>
            </div>

            <div className="h-3" />

            <h4>FRONT-END</h4>
            <div className="pl-4">
                <p>
                    Desenvolvido usando <b>REACT.JS</b> com o framework <b>Next.js</b>,
                    juntamente com <b>typescript</b> e <b>tailwindcss</b>.
                </p>
                <p>
                    Foi feita a importação do <b>Design System</b> conforme sugerido,
                    que se encontra dentro do <b><code>extend</code></b> no arquivo <b><code>tailwind.config.ts</code></b>.
                </p>
                <p>
                    Também foi utilizada a lib do <b>Shadcn</b> para acelerar o desenvolvimento e
                    evitar a necessidade de desenvolver todos os componentes utilizados, como botões, Dialog, etc.
                </p>
            </div>

            <div className="h-3" />
            <h4>BACK-END</h4>
            <div className="pl-4">
                <p>
                    Desenvolvido usando <b>NODE.JS</b> com o framework <b>Express</b>,
                    juntamente com <b>typescript</b>.
                </p>
                <p>
                    Foi utilizado o <b>Prisma</b> para conexão com o banco de dados, e foi feita a leitura do arquivo .json fornecido, enviando suas informações para um banco <b>postgreSQL</b>.
                </p>
            </div>

            <div className="h-3" />
            <h4>INFORMAÇÕES</h4>
            <div className="pl-4">
                <h6>INÍCIO</h6>
                <p>Introdução do que foi feito e do que foi utilizado.</p>
                <h6>CONTRATO</h6>
                <p>Listagem dos contratos, bem como a visualização das parcelas e a possibilidade de visualizar o endividamento atual, baseado na data do contrato.</p>
                <h6>MESES</h6>
                <p>Listagem dos meses de um determinado ano, informando o mês do ano em que houve mais endividamento.</p>
            </div>
            <div className="h-40 sm:h-1" />
        </div>
    );
}
