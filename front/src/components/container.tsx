'use client'
import { ReactNode, useEffect, useState } from "react"

type ContainerProps = {
    children : ReactNode
}
export function Container({children}: ContainerProps) {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null
    }

    const largura = window.innerWidth ?? 0
    
    if (largura < 640) return children
    
    return(
        <div className="pl-60 w-full">
                        
            {children}

        </div>
    )
}