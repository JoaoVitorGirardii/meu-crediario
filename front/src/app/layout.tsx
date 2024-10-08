import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { TopMenu } from "@/components/top-menu";
import { Footer } from "@/components/footer";
import { MenuLateral } from "@/components/menu-lateral";
import { Container } from "@/components/container";
import { Suspense } from "react";
import Loading from "./loading";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Meu Crediario",
    description: "Desenvolvido com Next.js + TypeScript",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    return (
        <html lang="pt-br">
            <body className={openSans.className}>
                <main className="flex min-h-screen text-text prose bg-background">

                    <MenuLateral/>

                    <Container>
                        <TopMenu/>
                            <Suspense fallback={<Loading/>}>
                                { children }
                            </Suspense>
                        
                        <Footer/>
                    </Container>

                </main>
            </body>
        </html>
    );
}
