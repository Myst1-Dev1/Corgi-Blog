import Image from "next/image";

export function Intro() {
    return (
        <>
            <div className="flex items-end relative w-full min-h-[70dvh] lg:min-h-screen bg-[url('/images/corgi.webp')] bg-cover bg-center">
                <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="px-6 py-12 z-20 text-white flex justify-between flex-wrap gap-7 lg:gap-0 items-center w-full">
                    <div className="max-w-md w-full flex flex-col gap-4">
                        <span className="w-fit p-1 bg-[#ffffff50] rounded-md font-medium text-white">Alimentação</span>
                        <h2 className="font-semibold text-2xl">A alimentação dos corgis algo importante</h2>
                        <p className="line-clamp-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quo suscipit quia possimus incidunt dolores, aut, alias enim repellendus facilis ipsum perspiciatis delectus iusto, voluptatem natus eos! Eligendi, consequatur corporis!</p>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-white block cursor-pointer"></span>
                            <span className="w-4 h-4 rounded-full border border-white block cursor-pointer"></span>
                            <span className="w-4 h-4 rounded-full border border-white block cursor-pointer"></span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-5">
                            <Image src="/images/user.jpg" width={200} height={200} className="w-10 h-10 rounded-full aspect-square object-cover" alt="foto do usuário" />
                            <h3 className="font-semibold">Lena Doe</h3>
                        </div>
                        <span className="text-sm font-normal">24 de Janeiro de 2025</span>
                    </div>
                </div>
            </div>
        </>
    )
}