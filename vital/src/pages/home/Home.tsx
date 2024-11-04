import {
  Armchair,
  Barbell,
  Brain, CurrencyCircleDollar, DiceFive,
  FlowerLotus, HandHeart, Handshake, OrangeSlice,
  Person
} from "@phosphor-icons/react";

import Carrossel from "../../components/carrossel/Carrossel";
import CardServicos from "../../components/card/cardservicos/CardServicos";
import CardBeneficios from "../../components/card/cardbeneficios/CardBeneficios";
import { Link } from "react-router-dom";

function Home() {
  
  const servicos = [
    { icone: <FlowerLotus size={40} />, categoria: "Yoga", descricao: "Aulas de yoga para equilíbrio físico e mental, com técnicas de respiração, alongamento e meditação." },
    { icone: <OrangeSlice size={40} />, categoria: "Nutrição", descricao: "Consultas de nutrição personalizadas para melhorar sua saúde com orientações alimentares equilibradas e funcionais." },
    { icone: <Armchair size={40} />, categoria: "Terapia", descricao: "Sessões de terapia para promover bem-estar emocional, autoconhecimento e equilíbrio mental." },
    { icone: <Brain size={40} />, categoria: "Psicologia", descricao: "Atendimento psicológico para fortalecer a saúde mental, promovendo autoconhecimento e superação de desafios emocionais." },
    { icone: <Barbell size={40} />, categoria: "Personal Trainer", descricao: "Treinos personalizados com personal trainer para alcançar seus objetivos de fitness com eficiência e segurança." },
    { icone: <DiceFive size={40} />, categoria: "Psicopedagogia", descricao: "Atendimento psicopedagógico para apoiar o desenvolvimento cognitivo e ajudar a superar dificuldades de aprendizagem." },
  ];

  const beneficios = [
    { icone: <CurrencyCircleDollar size={48} color="#87ce6e" />, titulo: "Preços acessíveis", descricao: "Preço Acessível e diversos meios de pagamento"},
    { icone: <Handshake size={48} color="#87ce6e" />, titulo: "Confiança", descricao: "Profissionais confiáveis e qualificados para te atender"},
    { icone: <HandHeart size={48} color="#87ce6e" />, titulo: "Conforto", descricao: "Cuide da sua saúde do conforto da sua casa"},
    { icone: <Person size={48} color="#87ce6e" />, titulo: "Para você e sua família", descricao: "Cuidado Completo Para Você e Sua Família"}
  ]

  return (
    <div className='min-h-screen'>   
      <div>
        <Carrossel />
      </div>

      <section className= "min-h-screen flex justify-center items-center p-11">
        <div className=" md:w-3/4 flex flex-col items-center gap-y-10" >
          <div className="max-w-4xl mt-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-5 text-center">Conheça alguns dos nossos serviços</h2>
            <p className="font-text text-grey-3 text-base sm:text-lg text-center mb-5">Explore como a Vital+ pode transformar sua saúde preventiva. Oferecemos serviços personalizados, que vão desde programas de bem-estar, saúde física até orientação nutricional. Cadastre-se na nossa plataforma para descobrir como podemos apoiar sua jornada rumo a uma vida mais equilibrada e saudável.</p>
          </div>
          <div className='grid grid-cols-1 w-full items-center md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {servicos.map((service, index) => (
              <CardServicos key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grey-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center">Sua Saúde em Foco com a Vital+</h2>
            <p className="font-text text-grey-3 text-base sm:text-lg text-center mb-5">Acreditamos que a prevenção é o melhor remédio, e é por isso que estamos comprometidos em transformar a saúde em algo acessível, descomplicado e personalizado para você. Seja com dicas de alimentação, exercícios, ou serviços especializados, a Vital+ está ao seu lado em cada passo da sua jornada de bem-estar.</p>
          </div>
          <video autoPlay muted loop >
            <source src="https://ik.imagekit.io/iixrkkdfp/4352398-hd_1920_1080_25fps.mp4?updatedAt=1728687507763" type="" />
          </video>
        </div>
      </section>

      <section className= "min-h-[80vh] flex justify-center items-center p-16">
        <div className=" flex flex-col items-center gap-y-10" >
          <div className="max-w-5xl mb-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-center">Nossos benefícios</h2>
            <p className="font-text text-grey-3 text-base sm:text-lg text-center mb-5">Na Vital+, nos dedicamos a oferecer uma experiência completa de cuidado com a saúde, pensada para facilitar o seu dia a dia e de sua família. Conheça os benefícios exclusivos que proporcionamos</p>
          </div>
          <div className='flex flex-wrap md:flex-row justify-center items-center gap-8'>
            {beneficios.map((service, index) => (
              <CardBeneficios key={index} {...service} />
            ))}
          </div>
          <div className="flex flex-col gap-y-3 items-center mt-6">
            <p className="font-text  text-grey-3 text-lg">Ainda não se cadastrou?</p>
            <Link to= "/cadastro">
             <button className="bg-green-1 py-3 px-4 text-lg rounded-lg hover:scale-105 transition duration-300 ease-in-out"> 
                Cadastre-se
              </button>
            </Link>
          </div>
        </div>
      </section>

  </div>
  );
}

export default Home;
