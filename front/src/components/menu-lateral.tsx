"use client"
import logo from "@/assets/logo-meu-crediario-2023.svg"
import Image from "next/image"
import { useEffect, useState } from "react";

export function MenuLateral() {
    
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null
    }
    const largura = window.innerWidth ?? 0

    if (largura < 640) return

    return(
        <div className="bg-primary min-w-60 fixed h-svh">
            <div className="flex h-[52px] bg-primary-dark items-center justify-center text-center">
                <Image src={logo} alt="" width={150} height={100}/>
            </div>
        </div>
    )
}