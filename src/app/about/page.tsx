import Image from "next/image";

export default function About() {
    return (
        <div className="py-10 container m-auto">
            <h2 className="font-bold text-2xl text-center">O que é o Corgi Blog?</h2>
            <div className="mt-10 grid place-items-center gap-20 m-auto lg:grid-cols-2 sm:grid-cols-1 px-3">
                <div className='flex flex-col gap-6 mt-5'>
                    <p>
                        O corgi blog é lugar definitivo para os amantes desses irresistíveis pequenos gigantes
                        de orelhas pontudas! Aqui, mergulhamos fundo no fascinante universo dos corgis, 
                        compartilhando histórias encantadoras, dicas valiosas e um amor incondicional por esses
                        companheiros caninos adoráveis.
                    </p>
                    <p>
                        Em nosso blog, você encontrará uma mistura cativante de momentos fofos, travessuras 
                        hilárias e insights sobre a personalidade única dos corgis. Cada post é uma celebração 
                        do carisma e da alegria que esses peludinhos trazem para nossas vidas, proporcionando uma
                        experiência imersiva no mundo encantado dos corgis.
                    </p>
                    <p>
                        Prepare-se para se apaixonar ainda mais pelos corgis enquanto exploramos juntos as
                        maravilhas do universo canino através do nosso "Corgi Blog". Porque, afinal, quando se
                        trata de corgis, o encanto está sempre a um latido de distância.
                    </p>
                </div>
                <Image src="/images/aboutImage.webp" width={400} height={400} alt="imagem da página de sobre"/>
            </div>
            <div className="mt-20 grid grid-cols-1 px-3">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <Image className="rounded-full" src="/images/admImage.webp" width={100} height={100} alt="foto do adm da página" />
                    <h3 className="font-bold text-xl">John Doe</h3>
                    <h4 className="text-orange-400 font-bold">ADM</h4>
                </div>
                <div className='flex flex-col gap-6 mt-5'>
                    <p>
                        Conheça o coração por trás das orelhinhas fofas do 'Corgi Blog': John Doe, nosso 
                        fundador apaixonado e entusiasta canino. John é mais do que apenas um amante de corgis;
                        ele é a força motriz por trás de nossa comunidade dedicada a celebrar esses pequenos
                        gigantes de quatro patas.
                    </p>
                    <p>
                        Com uma devoção inabalável pelos corgis, John traz sua paixão contagiosa para cada
                        post, compartilhando não apenas histórias adoráveis, mas também sua experiência
                        valiosa como amante e cuidador desses peludos encantadores. Seu compromisso em criar
                        um espaço acolhedor para os entusiastas de corgis é evidente em cada palavra e imagem
                        que você encontra aqui.
                    </p>
                    <p>
                        A jornada de John no mundo dos corgis começou como uma paixão pessoal, e ao criar o
                        'Corgi Blog', ele transformou essa paixão em uma comunidade vibrante. Ao seguir as
                        aventuras e conselhos de John, você se encontrará imerso em um universo repleto de
                        alegria, ternura e, é claro, muita corgi-mania.
                    </p>
                </div>
            </div>
        </div>
    )
}