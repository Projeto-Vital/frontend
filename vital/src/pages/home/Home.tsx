import { Armchair, Barbell, Brain, Checks, DiceFive, FlowerLotus, House, Money, OrangeSlice, UsersThree } from "@phosphor-icons/react"

function Home() {
  return (
    <div className='min-h-screen'>
        {/*Image Section */}
        <section className=''>
            <div className=''>
              <img src="https://ik.imagekit.io/iixrkkdfp/Loja%20Games%20/Arte3.webp?updatedAt=1725396235350" alt="" className= 'w-full' />
            </div>
        </section>
        {/*Serviços Section */}
        <section className=' flex items-center  py-2 md:py-14 '>
            <div className='container mx-auto flex flex-col gap-y-10 place-items-center p-10 text-center'>

                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-3'>Conheça alguns dos nossos serviços</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem architecto officia id quis hic aliquam, ipsum minima illum sunt repellat aliquid optio illo placeat consequuntur ex quos et itaque qui?</p>

                <div className='flex flex-wrap justify-center lg:flex gap-3 *:font-bold cursor-pointer'>
                  <div className=' flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-green-1 rounded-lg hover:text-white hover:duration-150'>
                    <FlowerLotus size={40} />
                    <p>Yoga</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-green-1 rounded-lg hover:text-white hover:duration-150'>
                    <OrangeSlice size={40}  />
                    <p>Nutrição</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-green-1 rounded-lg hover:text-white hover:duration-150'>
                    <Armchair size={40}  />
                    <p>Terapia</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-green-1 rounded-lg hover:text-white hover:duration-150'>
                    <Brain size={40}  />
                    <p>Psicologia</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-green-1 rounded-lg hover:text-white hover:duration-150'>
                    <Barbell size={40}  />
                    <p>Personal Trainer</p>
                  </div>
                  <div className='flex flex-col place-items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-green-1 rounded-lg hover:text-white hover:duration-150'>
                    <DiceFive size={40}  />
                    <p>Psicopedagogo</p>
                  </div>
                </div>
            </div>
        </section>

        <section className=' flex justify-center bg-green-1 py-16'>
            <div className='flex flex-col gap-y-2 justify-center'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl  text-center mb-7 font-bold text-black'>Principais Benefícios da Vital+</h2>
             
              <div className='flex justify-center flex-wrap gap-3'>

                <div className='flex flex-col items-center text-center p-5 '>
                  <div className='flex justify-center'>
                    <Money size={56} />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2'>Preço Acessível</p>
                  <p> <strong> Preço Acessível </strong> e diversos meios de pagamento</p>
                </div>

                <div className='flex flex-col items-center ext-center p-5'>
                  <div className='flex justify-center'>
                    <Checks size={56} />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2'>Confiaça</p>
                  <p> <strong> Profissionais confiáveis</strong> e qualificados para te atender</p>
                </div>

                <div className='flex flex-col items-center  text-center p-5'>
                  <div className='flex justify-center'>
                    <House size={56} />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2'>Conforto</p>
                  <p>Cuide da sua saúde do <strong> conforto </strong> da sua casa</p>
                </div>

                <div className='flex flex-col items-center text-center p-5'>
                  <div className='flex justify-center'>
                    <UsersThree size={56} />
                  </div>
                  <p className='font-bold text-lg md:text-xl mb-2'>Para Você e Sua Família</p>
                  <p>Cuidado Completo <strong> Para Você e Sua Família </strong></p>
                </div>
              </div>
            </div>
        </section>
      </div>
  )
}

export default Home