import Image from "next/image"

import { FaBars } from 'react-icons/fa';

export function Header() {
    return (
        <div className="flex justify-between items-center m-auto container mt-5 sm: px-3">
            <Image src="/images/Logo.webp" width={150} height={100} alt="Imagem da logo"/>
            <FaBars className="cursor-pointer text-xl" />
        </div>
    )
}