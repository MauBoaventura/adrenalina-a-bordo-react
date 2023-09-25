'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import logo from '../../public/logo-ideb-saeb.svg'

export default function Header() {
    const router = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const isLinkActive = (href: string) => {
        return router === href ? 'bg-[#2A72A1] hover:bg-[#2A72A1]/80' : 'bg-[#F0F0F0] text-black';
    };

    return (
        <div className='flex justify-center'>
            <div className='hidden lg:flex gap-2 py-1 w-full lg:max-w-[1200px]'>
                <Button asChild className={isLinkActive('/serie')}>
                    <Link href="/serie">Série</Link>
                </Button>
                <Button asChild className={isLinkActive('/turma')}>
                    <Link href="/turma">Turma</Link>
                </Button>
                <Button asChild className={isLinkActive('/descritores')}>
                    <Link href="/descritores">Descritores</Link>
                </Button>
                <Button asChild className={isLinkActive('/alunos')}>
                    <Link href="/alunos">Alunos</Link>
                </Button>
                <Button asChild className={isLinkActive('/questoes')}>
                    <Link href="/questoes">Questões</Link>
                </Button>
            </div>
            <div className='lg:hidden lg:gap-2 lg:py-1 w-full lg:max-w-[1200px] flex flex-col justify-center items-center'>
                <Image className="lg:hidden mt-4 mb-2" src={logo} alt="Logo" width={100} height={100} />
                <Button onClick={toggleMenu} className={` hover:bg-blue-400 text-black px-4 py-2 rounded`}>☰</Button>
                {menuOpen && <>
                    <Button asChild className={isLinkActive('/serie')}>
                        <Link href="/serie">Série</Link>
                    </Button><Button asChild className={isLinkActive('/turma')}>
                        <Link href="/turma">Turma</Link>
                    </Button>
                    <Button asChild className={isLinkActive('/descritores')}>
                        <Link href="/descritores">Descritores</Link>
                    </Button>
                    <Button asChild className={isLinkActive('/alunos')}>
                        <Link href="/alunos">Alunos</Link>
                    </Button>
                    <Button asChild className={isLinkActive('/questoes')}>
                        <Link href="/questoes">Questões</Link>
                    </Button>
                    </>}
            </div>
        </div>
    )
}