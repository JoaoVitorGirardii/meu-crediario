'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopMenu() {
    
    const pathname = usePathname()

    return(
        <div className="flex h-[52px] bg-white w-full shadow-md shadow-gray-light items-center flex-row pl-4 gap-4 fixed">
            <Link href={"/"} className={`flex flex-row border-b-4 ${pathname === '/' ? 'border-b-primary-dark' : 'border-b-white'}`} >
                INÍCIO
            </Link>
            <Link href={"/contrato"} className={`flex flex-row border-b-4 ${pathname === '/contrato' ? 'border-b-primary-dark' : 'border-b-white'}`}>
                CONTRATOS
            </Link>
            <Link href={"/meses"} className={`flex flex-row border-b-4 ${pathname === '/meses' ? 'border-b-primary-dark' : 'border-b-white'}`}>
                MESES
            </Link>
        </div>
    )
}