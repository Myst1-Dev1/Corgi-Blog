'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center m-auto container mt-5 sm: px-3">
                <Image src="/images/Logo.webp" width={150} height={100} alt="Imagem da logo"/>
                <FaBars onClick={() => setNavbar(!navbar)} className="cursor-pointer text-xl" />
            </div>
            <nav className={`text-xl flex flex-col justify-center items-center gap-5 bg-white w-full min-h-full transition-all absolute ${navbar ? 'top-0' : '-top-full'}`}>
                <FaTimes onClick={() => setNavbar(false)} className="absolute top-10 right-5 cursor-pointer" />
                <Link onClick={() => setNavbar(!navbar)} className="hover:text-orange-500 transition-colors" href="/">Início</Link>
                <Link onClick={() => setNavbar(!navbar)} className="hover:text-orange-500 transition-colors" href="/about">Sobre</Link>
                <Link onClick={() => setNavbar(!navbar)} className="hover:text-orange-500 transition-colors" href="/contact">Contato</Link>
                <Link onClick={() => setNavbar(!navbar)} className="hover:text-orange-500 transition-colors" href="/signInPage">Entrar</Link>
                <Link onClick={() => setNavbar(!navbar)} className="hover:text-orange-500 transition-colors" href="/">Criar conta</Link>
            </nav>
        </>
    )
}