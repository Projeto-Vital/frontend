
function Funcionalidade() {

  return (
    <>
     <section className="w-full h-screen bg-green-2 flex items-center justify-evenly gap-x-5 px-7" id='cadastro'>
          <div className='flex items-center'>
            <div className='max-w-[650px]'>
              <h2 className='text-7xl font-bold text-white mb-6'>1.Faça seu Cadastro</h2>
              <p className='text-white text-xl mb-6'>Preencha a página de cadastro com suas informações. Isso permitirá que você acesse serviços exclusivos em nossa plataforma.</p>
              <a className='inline-block p-3 bg-white text-green-2 transition duration-300 ease-in-out hover:scale-110 rounded-full font-bold'href="#servico">Ir para o próximo passo</a>
            </div>
          </div>
          <div>
            <img src="https://ik.imagekit.io/iixrkkdfp/form.gif?updatedAt=1725994505835" alt="" width={250} />
          </div>
      </section>

      <section className="w-full h-screen bg-white flex items-center justify-evenly gap-x-5 px-7" id='servico'>
          <div className='flex items-center'>
            <div className='max-w-[650px]'>
              <h2 className='text-7xl font-bold text-green-2 mb-6'>2.Procure pelo serviço desejado</h2>
              <p className='text-green-2 text-xl mb-6'>
                Procure por um de nosso serviços como: Yoga, Psicologia, Terapia, Psicopedagogia, Nutrição e Personal Trainer.
              </p>
              <a className='inline-block p-3 bg-green-2 transition duration-300 ease-in-out hover:scale-110 text-white font-bold rounded-full font-bold'href="#profissional">Ir para o próximo passo</a>
            </div>
          </div>
          <div>
            <img src="https://ik.imagekit.io/iixrkkdfp/search.gif?updatedAt=1725994506097" alt="" width={250} />
          </div>
      </section>
      <section className="w-full h-screen bg-green-2 flex items-center justify-evenly gap-x-5 px-7" id='profissional'>
          <div className='flex items-center'>
            <div className='max-w-[650px]'>
              <h2 className='text-7xl font-bold text-white mb-6'>3.Escolha o profissional</h2>
              <p className='text-white text-xl mb-6'>
                Explore nossa ampla lista de profissionais especializados e escolha aquele que mais se alinha às suas necessidades.
                Cada perfil oferece informações detalhadas sobre experiência e 
                qualificações,facilitando sua decisão para encontrar o especialista perfeito.
              </p>
              <a className='inline-block p-3 bg-white text-green-2 transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full'href="#agenda">Ir para o próximo passo</a>
            </div>
          </div>
          <div>
            <img src="https://ik.imagekit.io/iixrkkdfp/handshake.gif?updatedAt=1725994505583" alt="" width={250} />
          </div>
      </section>

      <section className="w-full h-screen bg-white flex items-center justify-evenly gap-x-5 px-7" id='agenda'>
          <div className='flex items-center'>
            <div className='max-w-[650px]'>
              <h2 className='text-7xl font-bold text-green-2 mb-6'>4.Agende sua consulta ou sessão</h2>
              <p className='text-green-2 text-xl mb-6'>Agende sua consulta ou sessão facilmente através do nosso sistema de agendamento online.</p>
              <a className='inline-block p-3 bg-green-2  transition duration-300 ease-in-out hover:scale-110 text-white font-bold rounded-full'href="#cadastro">Voltar ao início</a>
            </div>
          </div>
          <div>
            <img src="https://ik.imagekit.io/iixrkkdfp/calendar.gif?updatedAt=1725994506030" alt="" width={250} />
          </div>
      </section>
    </>
  )
}

export default Funcionalidade