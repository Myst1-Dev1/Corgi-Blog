import { PostIntro } from "@/components/post/postIntro";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Post() {
    return (
        <>
           <PostIntro />
           <div className="container py-8">
                <p className="font-normal text-lg leading-7 text-gray-500">
                    Os Corgis conquistaram o coração do mundo com suas patinhas curtas, orelhas grandes e um carisma inconfundível. Mas, além da fofura que faz sucesso nas redes sociais, essa raça também guarda muitas curiosidades e características únicas que todo tutor — ou futuro tutor — deveria conhecer. Neste post, vamos explorar a origem histórica dos Corgis, sua ligação com a realeza britânica, os cuidados essenciais para manter a saúde e o bem-estar desses companheiros tão especiais, além de dicas práticas sobre alimentação, comportamento e exercícios ideais. Se você é apaixonado por cães ou está pensando em adotar um Corgi, aqui vai encontrar informações completas, curiosidades divertidas e insights que vão te ajudar a entender melhor o universo desses peludinhos encantadores.
                </p>
           </div>
           <div className="py-8 container flex flex-col lg:flex-row items-center gap-5">
                <Image className="w-16 h-16 rounded-full m-auto object-cover" src="/images/user.jpg" width={400} height={400} alt="foto do autor do post" />
                <div>
                    <h2 className="text-xl font-bold mb-3">Jane Doe</h2>
                    <p className="text-sm font-normal text-gray-500">
                        Com anos de experiência estudando e convivendo com Corgis, Jane Doe reúne conhecimento e carinho pela raça em seus artigos. Seu objetivo é informar, inspirar e aproximar ainda mais os apaixonados por esses peludos.
                    </p>
                </div>
           </div>
           <div className="py-8 container">
                <h2 className="text-2xl mb-5 font-bold">Continue Lendo</h2>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
                    <div className="w-full relative lg:col-span-2">
                        <Image className="w-full h-52 mb-2 rounded-md object-cover" src="/images/corgi.webp" width={400} height={400} alt="foto do post" />
                        <span className="text-gray-500 text-xs">30 de Janeiro, 2025</span>
                        <h3 className="text-xl lg:text-2xl font-semibold">O treinamento de um Corgi</h3>
                        <p className="text-gray-500 font-thin line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea at facilis illum cupiditate sequi aliquid, inventore dicta vel, aspernatur doloribus quisquam illo ipsam voluptate dolore. A ipsam fugit dolores.</p>
                        <Link href="/" className="flex items-center mt-2 gap-3 font-semibold w-fit p-2 transition-all duration-500 hover:bg-orange-400 hover:text-white">Ver Mais <FaArrowRightLong /></Link>
                        <div className="mt-5 flex items-center gap-3">
                            <Image className="w-8 h-8 rounded-full object-cover" src="/images/user.jpg" width={32} height={32} alt="foto do usuário que fez a postagem" />
                            <span className="font-medium">Jane Doe</span>
                        </div>
                        <span className="text-white p-2 text-sm absolute top-3 left-3 w-fit bg-black/60 rounded-full">Treinamento</span>
                    </div>
                    <div className="w-full relative">
                        <Image className="w-full h-52 mb-2 rounded-md object-cover" src="/images/corgi.webp" width={400} height={400} alt="foto do post" />
                        <span className="text-gray-500 text-xs">30 de Janeiro, 2025</span>
                        <h3 className="text-xl font-semibold">O treinamento de um Corgi</h3>
                        <p className="text-gray-500 font-thin line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea at facilis illum cupiditate sequi aliquid, inventore dicta vel, aspernatur doloribus quisquam illo ipsam voluptate dolore. A ipsam fugit dolores.</p>
                        <Link href="/" className="flex items-center mt-2 gap-3 font-semibold w-fit p-2 transition-all duration-500 hover:bg-orange-400 hover:text-white">Ver Mais <FaArrowRightLong /></Link>
                        <div className="mt-5 flex items-center gap-3">
                            <Image className="w-8 h-8 rounded-full object-cover" src="/images/user.jpg" width={32} height={32} alt="foto do usuário que fez a postagem" />
                            <span className="font-medium">Jane Doe</span>
                        </div>
                        <span className="text-white p-2 text-sm absolute top-3 left-3 w-fit bg-black/60 rounded-full">Treinamento</span>
                    </div>
                    <div className="w-full relative">
                        <Image className="w-full h-52 mb-2 rounded-md object-cover" src="/images/corgi.webp" width={400} height={400} alt="foto do post" />
                        <span className="text-gray-500 text-xs">30 de Janeiro, 2025</span>
                        <h3 className="text-xl font-semibold">O treinamento de um Corgi</h3>
                        <p className="text-gray-500 font-thin line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea at facilis illum cupiditate sequi aliquid, inventore dicta vel, aspernatur doloribus quisquam illo ipsam voluptate dolore. A ipsam fugit dolores.</p>
                        <Link href="/" className="flex items-center mt-2 gap-3 font-semibold w-fit p-2 transition-all duration-500 hover:bg-orange-400 hover:text-white">Ver Mais <FaArrowRightLong /></Link>
                        <div className="mt-5 flex items-center gap-3">
                            <Image className="w-8 h-8 rounded-full object-cover" src="/images/user.jpg" width={32} height={32} alt="foto do usuário que fez a postagem" />
                            <span className="font-medium">Jane Doe</span>
                        </div>
                        <span className="text-white p-2 text-sm absolute top-3 left-3 w-fit bg-black/60 rounded-full">Treinamento</span>
                    </div>
                </div>
           </div>
        </>
    )
}