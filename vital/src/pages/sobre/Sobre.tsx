import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useEffect } from 'react';
import MembroEquipe from '../../components/equipe/MembroEquipe';

function Sobre() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

     const membros = [
    { foto:"https://ik.imagekit.io/iixrkkdfp/Time/clara.png?updatedAt=1725923593758",
      nome:"Clara Araújo",
      cargo:"Desenvolvedora Fullstack",
      linkedin:"https://www.linkedin.com/in/clara-araujo-mp/", 
      github:"https://github.com/claramamute"
    },
    { foto:"https://ik.imagekit.io/iixrkkdfp/Time/55850170.png?updatedAt=1725923593130",
      nome:"Larissa Angioni",
      cargo:"Desenvolvedora Fullstack",
      linkedin:"https://www.linkedin.com/in/larissaangioni/", 
      github:"https://github.com/LarissaAngioni"
    },
    { foto:"https://ik.imagekit.io/iixrkkdfp/Time/1718931946963.jfif?updatedAt=1725923592891",
      nome:"Pamela Salgado",
      cargo:"Desenvolvedora Fullstack",
      linkedin:"https://www.linkedin.com/in/pamelasalgadoa/", 
      github:"https://github.com/pamelalmeidaa"
    },
    { foto:"https://ik.imagekit.io/iixrkkdfp/Time/GLS3259.jpg?updatedAt=1725923594879",
      nome:"Paulo Dante",
      cargo:"Desenvolvedor Fullstack",
      linkedin:"https://www.linkedin.com/in/paulo-dante/", 
      github:"https://github.com/dantekhann"
    },
    { foto:"https://ik.imagekit.io/iixrkkdfp/Time/_GLS3197%20(1).jpg?updatedAt=1725923594580",
      nome:"Tayluan Santos",
      cargo:"Desenvolvedor Fullstack",
      linkedin:"https://www.linkedin.com/in/tayluan-de-jesus-dos-santos/", 
      github:"https://github.com/TayluanSantos"
    },
  ]
  return (
    <>
    <section className="relative">
      <img src="https://ik.imagekit.io/iixrkkdfp/Time/Black%20friday%20eletr%C3%B4nicos%20fotogr%C3%A1fico%20azul%20preto%20banner%20para%20site%20(2).png?updatedAt=1729807973412" alt="" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-title font-bold mb-5 text-center">Quem somos</h1>
        <p className="hidden md:block font-text mb-6 text-xl text-center">
          Na Vital+, acreditamos que a saúde de qualidade deve ser acessível a todos. Oferecemos serviços com preços justos, apoiados por uma equipe de profissionais confiáveis e qualificados.
        </p>
      </div>
    </section>

    <section className="relative">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className="flex flex-col justify-center p-10 bg-grey-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title font-bold mb-5">Nossa Missão</h2>
          <p className="font-text mb-6 text-base sm:text-lg  text-grey-3">
          Na Vital+, nosso objetivo é garantir que todos tenham acesso a cuidados de saúde preventivos de qualidade, em sintonia com os Objetivos de Desenvolvimento Sustentável da ONU, especialmente o ODS 3. Queremos promover o bem-estar e prevenir doenças, ajudando a construir um futuro mais saudável e sustentável para todos, independentemente de localização ou condições financeiras.
          </p>
        </div>
        <div className="relative">
          <img src="https://ik.imagekit.io/iixrkkdfp/Time/matheus-ferrero-yfmjALh1S6s-unsplash.jpg?updatedAt=1729717352457" alt="Missão da Vital+" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section className="relative">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className="relative">
          <img src="https://ik.imagekit.io/iixrkkdfp/kaylee-garrett-GaprWyIw66o-unsplash.jpg?updatedAt=1725032788240" alt="Valores da Vital+" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title font-bold mb-5">Nossos Valores</h2>
          <p className="font-text mb-6 text-base sm:text-lg text-grey-3">
            Na Vital+, acreditamos que a saúde de qualidade deve ser acessível a todos. Oferecemos serviços com preços justos, apoiados por uma equipe de profissionais confiáveis e qualificados. Valorizamos a inovação, usando tecnologia para facilitar o cuidado com sua saúde. Nosso compromisso é com o cuidado humanizado, tratando cada cliente com empatia e atenção, sempre focando no bem-estar completo de você e sua família.
          </p>
        </div>
      </div>
    </section>
 
    <section className=' min-h-[100vh] flex flex-col justify-center items-center p-10 bg-grey-4'>
      <div className='max-w-5xl text-center'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title font-bold mb-5'>Conheça nosso time</h2>
        <p className="font-text text-grey-3 text-center text-base sm:text-lg mb-10">Somos um grupo de formandos da Generation Brasil. Nosso projeto tem como objetivo a promoção da saúde e do bem-estar através de uma plataforma digital,alinhada à ODS3, que facilita o acesso à serviços de saúde voltados a práticas preventivas.</p>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-y-10'>
        {membros.map((membro, index) => (
          <MembroEquipe key={index} {...membro} />
        ))}
      </div>
    </section>

    <section className="min-h-[80vh] flex flex-col justify-center items-center px-10">
      <div className='max-w-4xl mx-auto mb-5  '>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-center font-bold mb-5'>Principal Stack</h2>
        <p className='font-text text-grey-3 text-center text-base sm:text-lg mb-5'>Para garantir uma solução robusta, escalável e de alto desempenho, escolhemos uma stack tecnológica moderna e eficiente. Cada tecnologia foi selecionada visando atender às necessidades do projeto e oferecer a melhor experiência aos usuários.</p>
      </div>
      <div className=' grid grid-cols-2 lg:flex  gap-x-9'>
        <div className='flex flex-col justify-center items-center '>
          <img src="https://ik.imagekit.io/iixrkkdfp/Icones%20Tecnologias/Node.js.svg?updatedAt=1729803046289" alt="" width={60} />
          <span className='font-bold'>Node.js</span>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img src="https://ik.imagekit.io/iixrkkdfp/Icones%20Tecnologias/nestjs-color.svg?updatedAt=1728671533195" alt="" width={60} />
          <span className='font-bold'>NestJS</span>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img src="https://ik.imagekit.io/iixrkkdfp/Icones%20Tecnologias/mysql-color.svg?updatedAt=1728671919091" alt="" width={60} />
          <span className='font-bold'>MySQL</span>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img src="https://ik.imagekit.io/iixrkkdfp/Icones%20Tecnologias/typescript-color.svg?updatedAt=1728672114995" alt="" width={60} />
          <span className='font-bold'>Typescript</span>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img src="https://ik.imagekit.io/iixrkkdfp/Icones%20Tecnologias/tailwindcss-color.svg?updatedAt=1728672215742" alt="" width={60} />
          <span className='font-bold'>Tailwind CSS</span>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img src="https://ik.imagekit.io/iixrkkdfp/Icones%20Tecnologias/React.svg?updatedAt=1729803046323" alt="" width={60} />
          <span className='font-bold'>React</span>
        </div>
      </div>
    </section>
   </>
  )
}

export default Sobre