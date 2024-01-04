import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export function SideBarPosts() {
    return (
        <div className="m-auto lg:mt-0 w-[350px] sm:w-[300] mt-20">
            <div className="flex flex-col gap-10 p-3 justify-center items-center border border-gray-300 m-auto">
              <Image
                className="rounded-full" 
                src="/images/admImage.webp" width={100} height={100} alt="imagem do adm do blog" />
                <div className="flex items-center gap-4">
                    <FaFacebookF className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer" />
                    <FaTwitter className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer" />
                    <FaInstagram className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer" />
                </div>
                <h2 className="font-bold text-xl">John Doe</h2>
                <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
                <a className="text-orange-400 border-b border-orange-400 hover:text-orange-500" href="/">SAÍBA MAIS</a>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold">Categorias</h2>
                <div className="flex flex-col gap-10 mt-5">
                    <div className="cursor-pointer">
                        <Image 
                            className="hover:skew-x-1"
                            src="/images/healthCategoryImage.webp" width={400} height={120} alt="imagem de categoria" 
                        />
                        <div className="bg-orange-400 w-full text-white p-3"><h3>Saúde</h3></div>
                    </div>
                    <div className="cursor-pointer">
                        <Image 
                            className="hover:skew-x-1"
                            src="/images/alimentationCategoryImage.webp" width={400} height={120} alt="imagem de categoria" 
                        />
                        <div className="bg-orange-400 w-full text-white p-3"><h3>Alimentação</h3></div>
                    </div>
                    <div className="cursor-pointer">
                        <Image 
                            className="hover:skew-x-1"
                            src="/images/treinamentCategoryImage.webp" width={400} height={120} alt="imagem de categoria" 
                        />
                        <div className="bg-orange-400 w-full text-white p-3"><h3>Treinamento</h3></div>
                    </div>
                    <div className="cursor-pointer">
                        <Image 
                            className="hover:skew-x-1"
                            src="/images/curiousCategoryImage.webp" width={400} height={120} alt="imagem de categoria" 
                        />
                        <div className="bg-orange-400 w-full text-white p-3"><h3>Curiosidades</h3></div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold">Últimas Postagens</h2>
                <div className="flex flex-col gap-10 mt-5">
                    <div className="flex gap-5">
                        <Image src="/images/PostImage.webp" width={200} height={200} alt="imagens das últimas postagens" />
                        <div>
                            <div className="bg-orange-400 p-2 text-center w-32 text-white"><h3>Curiosidades</h3></div>
                            <h4 className="font-bold mt-3">Lorem Ipsum</h4>
                            <h6 className="text-gray-400 text-sm">Segunda-feira, 15 de Novembro de 2023</h6>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Image src="/images/PostImage.webp" width={200} height={200} alt="imagens das últimas postagens" />
                        <div>
                            <div className="bg-orange-400 p-2 text-center w-32 text-white"><h3>Curiosidades</h3></div>
                            <h4 className="font-bold mt-3">Lorem Ipsum</h4>
                            <h6 className="text-gray-400 text-sm">Segunda-feira, 15 de Novembro de 2023</h6>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Image src="/images/PostImage.webp" width={200} height={200} alt="imagens das últimas postagens" />
                        <div>
                            <div className="bg-orange-400 p-2 text-center w-32 text-white"><h3>Curiosidades</h3></div>
                            <h4 className="font-bold mt-3">Lorem Ipsum</h4>
                            <h6 className="text-gray-400 text-sm">Segunda-feira, 15 de Novembro de 2023</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}