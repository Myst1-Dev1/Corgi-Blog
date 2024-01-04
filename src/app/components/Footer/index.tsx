import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <div className="bg-footerBackground bg-cover w-full min-h-60 m-auto">
            <div className="container m-auto flex flex-col justify-between py-5 text-white sm:flex-row gap-8 px-3">
                <div>
                    <Image src="/images/whiteLogo.webp" width={150} height={100} alt="versão branca da logo" />
                    <p className="max-w-72 mt-3">
                        Nosso blog foi feito para amantes de corgis que gostam de acompanhar notícias sobre
                        esses cachorrinhos incríveis
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <FaFacebook className="text-xl cursor-pointer hover:text-orange-500 transition" />
                    <FaInstagram className="text-xl cursor-pointer hover:text-orange-500 transition" />
                    <FaTwitter className="text-xl cursor-pointer hover:text-orange-500 transition" />
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-5">Nosso Contato</h2>
                    <h6>+55 21 4002 8922</h6>
                    <h6>corgiblogoficial@gmail.com</h6>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-xl mb-5">Menu</h2>
                    <Link className="hover:text-orange-500 transition-opacity" href = "/">Início</Link>
                    <Link className="hover:text-orange-500 transition-opacity" href = "about">Sobre</Link>
                    <Link className="hover:text-orange-500 transition-opacity" href = "contact">Contato</Link>
                </div>
            </div>
            <div className="border-t-2 border-orange-500 w-full text-white flex justify-center items-center">
                <p className="py-3">© 2023, Design por <span className="text-orange-500">Myst1 Dev</span></p>
            </div>
        </div>
    )
}