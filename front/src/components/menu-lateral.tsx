"use client"
import logo from "@/assets/logo-meu-crediario-2023.svg"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import Image from "next/image"

export function MenuLateral() {
    const largura = useScreenWidth()

    if (largura < 640) return

    return(
        <div className="bg-primary min-w-60 fixed h-svh">
            <div className="flex h-[52px] bg-primary-dark items-center justify-center text-center">
                <Image src={logo} alt="" width={150} height={100}/>
            </div>
        </div>
    )
}