import { SideBarPosts } from '../../../app/components/sidebarPosts'
import Image from 'next/image'
import { FaHeart, FaRocketchat, FaThumbsUp } from 'react-icons/fa'

export default function PostPage() {
    return (
        <div className="py-10 container m-auto">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className='lg:w-[600px] sm:w-[300px] px-3 m-auto'>
                <div>
                    <Image src="/images/PostImage.webp" width={600} height={350} alt="foto da postagem" />
                    <div className='flex justify-between items-center py-5'>
                    <div className = {`bg-orange-400 p-3 text-center w-32 text-white`}>
                        <h3>Saúde</h3>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-3 items-center'><FaHeart className="cursor-pointer text-gray-400" /> <p>03</p></div>
                        <div className='flex gap-3 items-center'><FaRocketchat className="cursor-pointer text-gray-400" /> <p>06</p></div>
                    </div>
                    </div>
                    <p className='text-gray-400'>Segunda-feira, 15 de Outubro de 2023</p>
                    <h2 className='text-center font-bold mt-5 lg:text-3xl sm:text-base'>A rotina para o bem estár de um Corgi</h2>
                    <div className='flex flex-col gap-6 mt-5'>
                        <p>
                        🐾 Se você é um orgulhoso tutor de um adorável corgi, sabe o quão especial é o 
                            vínculo que compartilha com seu peludo companheiro. Para garantir que seu 
                            cãozinho seja alegre, saudável e plenamente realizado, uma rotina equilibrada é 
                            fundamental. Aqui estão algumas dicas para criar uma rotina que promova o bem-estar
                            do seu corgi e fortaleça ainda mais essa conexão especial entre vocês! 🐾
                        </p>
                        <p>
                            1. Passeios Diários: Nada deixa um corgi mais feliz do que explorar o mundo ao seu 
                            redor. Estabeleça passeios diários para permitir que seu peludo amigo gaste energia,
                            socialize com outros cães e desfrute do ar fresco. Esses momentos são cruciais para 
                            manter tanto a saúde física quanto mental do seu corgi.
                        </p>
                        <p>
                            2. Tempo de Brincadeiras Interativas: Os corgis são conhecidos por sua inteligência 
                            e disposição para brincar. Reserve um tempo diário para atividades interativas, como
                            jogos de busca, brinquedos desafiadores e sessões de treinamento. Estimular a mente 
                            do seu corgi é tão importante quanto exercitar seu corpo.
                        </p>
                        <p>
                            3. Alimentação Balanceada: Uma dieta equilibrada é a base para a saúde do seu corgi.
                            Consulte um veterinário para garantir que a alimentação do seu amigo de quatro patas
                            atenda às suas necessidades específicas, levando em consideração idade, peso e 
                            condições de saúde.
                        </p>
                        <p>
                            Ao seguir essas dicas e adaptá-las à personalidade única do seu corgi, você estará
                            construindo uma rotina que não apenas promove o bem-estar físico e emocional, mas
                            também cria memórias preciosas ao longo da jornada. Afinal, a felicidade do seu corgi
                            é a sua felicidade! 🐶💕 #CorgiFeliz #BemEstarPet #VidaComCorgi
                        </p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='font-bold text-xl'>Comentários(3)</h2>
                    <div className='mt-10 flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <Image className='rounded-full' width={50} height={50} 
                                src="/images/commentImage.webp" alt='foto da pessoa que fez o comentário' />
                            <h3 className='font-bold'>Serena Xavier</h3>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                        </p>
                        <FaThumbsUp className="text-gray-400 cursor-pointer hover:text-orange-500 transition-colors" />
                    </div>
                    <div className='mt-10 flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <Image className='rounded-full' width={50} height={50} 
                                src="/images/commentImage.webp" alt='foto da pessoa que fez o comentário' />
                            <h3 className='font-bold'>Serena Xavier</h3>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                        </p>
                        <FaThumbsUp className="text-gray-400 cursor-pointer hover:text-orange-500 transition-colors" />
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='font-bold text-xl'>Deixe um comentário</h2>
                    <textarea
                        className='mt-5 border outline-none resize-none border-gray-400 p-3 w-full' 
                        placeholder='Fazer comentário' 
                    />
                </div>
                </div>
                <SideBarPosts />
            </div>
        </div>
    )
}