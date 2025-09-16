import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export function Header() {
    return (
        <>
            <header className="z-20 flex justify-between items-center container py-6 absolute top-0 left-0 right-0 text-white">
                <div className="flex items-center gap-12">
                    <h1 className="text-2xl font-bold">Corgi Blog</h1>
                    <nav className="flex items-center gap-4">
                        <Link href="/" className="font-semibold text-[15px] transition-all duration-500 hover:text-orange-500">Alimentação</Link>
                        <Link href="/" className="font-semibold text-[15px] transition-all duration-500 hover:text-orange-500">Treinamento</Link>
                        <Link href="/" className="font-semibold text-[15px] transition-all duration-500 hover:text-orange-500">Saúde</Link>
                        <Link href="/" className="font-semibold text-[15px] transition-all duration-500 hover:text-orange-500">Curiosidades</Link>
                    </nav>
                </div>
                <div className="max-w-72 w-full p-2 rounded-md bg-[#ffffff56] flex items-center gap-3">
                    <input type="text" className="w-full border-none outline-none font-semibold" placeholder="Pesquisar..." />
                    <FaSearch className="text-white" />
                </div>
                <div className="flex items-center gap-4">
                    <span className="p-3 font-semibold transition-all duration-500 rounded-md cursor-pointer hover:bg-orange-500">Login</span>
                    <button className="bg-white w-fit p-3 rounded-md font-semibold cursor-pointer transition-all text-black duration-500 hover:bg-orange-500 hover:text-white">Cadastro</button>
                </div>
            </header>
        </>
    )
}