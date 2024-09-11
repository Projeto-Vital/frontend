import { Armchair, Barbell, Brain, Checks, DiceFive, FlowerLotus, House, Money, OrangeSlice, UsersThree } from "@phosphor-icons/react"

import './Home.css'
import Carrossel from "../../components/carrossel/Carrossel"
import { Link } from "react-router-dom"

function Home() {


  return (
    
    <div className='min-h-screen'>
            <div>
                <Carrossel />
            </div>
        {/*Serviços Section */}
        <section className=' flex items-center  py-2 md:py-14 '>
            <div className='container mx-auto flex flex-col gap-y-10 place-items-center p-10 text-center'>

                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-3'>Conheça alguns dos nossos serviços</h2>
                <p>Explore como a Vital+ pode transformar sua saúde preventiva. Oferecemos serviços personalizados, que vão desde programas de bem-estar, saúde física até orientação nutricional. Cadastre-se na nossa plataforma para descobrir como podemos apoiar sua jornada rumo a uma vida mais equilibrada e saudável.</p>

                <div className='flex flex-wrap justify-center lg:flex gap-3 *:font-bold cursor-pointer'>
                  <div className=' flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 text-white bg-green-2 rounded-lg hover:scale-105 hover:duration-150'>
                    <FlowerLotus size={40} />
                    <p>Yoga</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 text-white bg-green-2 rounded-lg hover:scale-105 hover:duration-150'>
                    <OrangeSlice size={40}  />
                    <p>Nutrição</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 text-white bg-green-2 rounded-lg hover:scale-105 hover:duration-150'>
                    <Armchair size={40}  />
                    <p>Terapia</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 text-white bg-green-2 rounded-lg hover:scale-105 hover:duration-150'>
                    <Brain size={40}  />
                    <p>Psicologia</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 text-white bg-green-2 rounded-lg hover:scale-105 hover:duration-150'>
                    <Barbell size={40}  />
                    <p>Personal Trainer</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 text-white bg-green-2 rounded-lg hover:scale-105 hover:duration-150'>
                    <DiceFive size={40}  />
                    <p>Psicopedagia</p>
                  </div>
                </div>
            </div>
        </section>

        <section className=' flex justify-center bg-green-2 py-16'>
            <div className='flex flex-col gap-y-2 justify-center'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl  text-center mb-7 font-bold text-white'>Principais Benefícios da Vital+</h2>
             
              <div className='flex justify-center flex-wrap gap-3'>

                <div className='flex flex-col items-center text-center p-5 '>
                  <div className='flex justify-center'>
                    <Money size={56} color="#ffffff" />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2 text-white'>Preço Acessível</p>
                  <p className='text-white'> <strong> Preço Acessível </strong> e diversos meios de pagamento</p>
                </div>

                <div className='flex flex-col items-center text-center p-5 '>
                  <div className='flex justify-center'>
                    <Checks size={56} color="#ffffff" />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2 text-white'>Confiaça</p>
                  <p className='text-white'> <strong> Profissionais confiáveis</strong> e qualificados para te atender</p>
                </div>

                <div className='flex flex-col items-center  text-center p-5 '>
                  <div className='flex justify-center'>
                    <House size={56} color="#ffffff" />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2 text-white'>Conforto</p>
                  <p className='text-white'>Cuide da sua saúde do <strong> conforto </strong> da sua casa</p>
                </div>

                <div className='flex flex-col items-center text-center p-5 tex'>
                  <div className='flex justify-center'>
                    <UsersThree size={56} color="#ffffff" />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2 text-white'>Para Você e Sua Família</p>
                  <p className='text-white'>Cuidado Completo <strong> Para Você e Sua Família </strong></p>
                </div>
              </div>
            </div>
        </section>
        <section className=' flex justify-center bg-white py-16 px-5'>
            <div className="flex flex-col justify-center items-center gap-y-4 px-2">
              <h2 className="text-4xl font-bold text-center">Ainda não se cadastrou?</h2>
              <p>Faça seu cadastro nossa plataforma e comece a cuidar da sua saúde de forma prática e eficiente</p>
              <Link to ='/cadastro'><button className="p-2 px-4 text-lg bg-green-2 text-white font-bold hover:scale-105 hover:duration-150">Cadastre-se</button> </Link>
            </div>
        </section>
        <section className=' flex justify-center bg-green-2 py-16'>
            <div className="max-w-[850px] px-6">
              <p className="text-white text-2xl text-center">Se precisar conversar ou buscar apoio emocional, o CVV - Centro de Valorização da Vida está disponível 24 horas pelo telefone 188,
                 ou acesse o site
                 <a href="https://cvv.org.br/" target="blank" className="hover:underline"> www.cvv.org.br </a>. Seu bem-estar é a nossa prioridade!</p>
            </div>
        </section>
      </div>
  )
}

export default Home