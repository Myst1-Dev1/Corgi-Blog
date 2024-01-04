import Image from "next/image";

export default function Contact() {
    return (
        <div className="py-10 container m-auto">
            <h2 className="text-2xl font-bold text-center">Nos envie uma mensagem</h2>
            <div className="mt-10 grid place-items-center m-auto lg:grid-cols-2 sm:grid-cols-1 px-3">
                <form className="w-72 mt-10 mb-10 flex flex-col gap-5">
                    <input className="outline-none border border-gray-400 p-3 w-full" type="text" placeholder="Nome" />
                    <input className="outline-none border border-gray-400 p-3 w-full" type="text" placeholder="Assunto" />
                    <textarea className="outline-none resize-none border border-gray-400 p-3 w-full" placeholder="Assunto" />
                    <button className="bg-orange-400 text-white p-3 w-full hover:bg-orange-500 transition-colors">Enviar</button>
                </form>
                <Image src="/images/contactImage.webp" width={400} height={400} alt="imagem da página de contato" />
            </div>
        </div>
    )
}