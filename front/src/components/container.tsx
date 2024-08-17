'use client'

import { useScreenWidth } from "@/hooks/useScreenWidth"
import { ReactNode } from "react"

type ContainerProps = {
    children : ReactNode
}
export function Container({children}: ContainerProps) {
    const largura = useScreenWidth()
    
    if (largura < 640) return children
    
    return(
        <div className="pl-60 w-full">
                        
            {children}

        </div>
    )
}