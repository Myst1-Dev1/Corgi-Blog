import Image from 'next/image'
import { FaHeart, FaRocketchat } from 'react-icons/fa'
import { SideBarPosts } from './components/sidebarPosts'

export default function Home() {
  return (
    <div className='py-5'>
      <div className="text-white min-h-96  bg-banner bg-cover bg-no-repeat flex justify-start items-center sm:justify-center">
        <div className="flex flex-col gap-5 container mx-auto">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Conheça o Incrível <br /> Mundo dos <span className="text-orange-400">Corgis</span>
          </h1>
          <p className='w-96 text-center sm:text-left'>
            Bem-vindo ao mundo encantador e irresistível dos Corgis! Se você é apaixonado por esses 
            pequenos grandes cãezinhos de patas curtas e orelhas expressivas, 
            este é o lugar certo para estar.
          </p>
          <div className='lg:m-0 sm: m-auto'>
            <button className="w-60 p-3 bg-orange-400 hover:bg-orange-500 transition-colors ion-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
      <div className="py-10 container m-auto">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className='flex flex-col gap-10 sm: px-3'>
            <div className={`w-full lg:w-[600px] sm:w-[300px] m-auto`}>
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
              <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
              </p>
              <button className='text-orange-400 border border-orange-400 w-32 p-3 mt-4 hover:bg-orange-200 transition-colors ion-colors'>SAÍBA MAIS</button>
            </div>
            <div className={`w-full lg:w-[600px] sm:w-[300px] m-auto`}>
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
              <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
              </p>
              <button className='text-orange-400 border border-orange-400 w-32 p-3 mt-4 hover:bg-orange-200 transition-colors ion-colors'>SAÍBA MAIS</button>
            </div>
            <div className={`w-full lg:w-[600px] sm:w-[300px] m-auto`}>
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
              <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
              </p>
              <button className='text-orange-400 border border-orange-400 w-32 p-3 mt-4 hover:bg-orange-200 transition-colors ion-colors'>SAÍBA MAIS</button>
            </div>
            <div className={`w-full lg:w-[600px] sm:w-[300px] m-auto`}>
              <div className='flex justify-between'>
                <button className='p-3 bg-orange-400 w-32 text-white hover:bg-orange-500 transition-colors'>Anterior</button>
                <button className='p-3 bg-orange-400 w-32 text-white hover:bg-orange-500 transition-colors'>Próximo</button>
              </div>
            </div>
          </div>
          <SideBarPosts />
        </div>
      </div>
    </div>
  )
}
