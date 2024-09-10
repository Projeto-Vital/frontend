import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'

function Sobre() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='min-h-screen flex justify-center items-center py-14 px-6'>

        <div className='max-w-[900px] flex flex-col gap-y-8'>

             <div className=' text-center flex flex-col gap-y-3'>
                <h1 className='text-6xl font-bold text-green-2 mb-4'>Conheça nosso time</h1>
                <p className='text-xl'>Somos um grupo de formandos da Generation Brasil. Nosso projeto tem como objetivo a promoção da saúde e do bem-estar através de uma plataforma digital,alinhada à ODS3, que facilita o acesso à serviços de saúde voltados a práticas preventivas.</p>
             </div>

            <div className='flex flex-wrap gap-4 justify-center'>
                <div className='w-[280px] flex flex-col justify-center items-center bg-green-2 p-5 rounded-lg hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                    <img src="https://ik.imagekit.io/iixrkkdfp/Time/clara.png?updatedAt=1725923593758" alt="foto de perfil Clara" width={150} height={150} className='rounded-full mb-4' />
                    <p className='text-2xl font-bold text-white'>Clara Araújo</p>
                    <span className='mb-2 text-white'>Desenvolvedora FullStack</span>
                    <div className='flex gap-x-2'>
                        <a href="https://github.com/claramamute" target='blank'><GithubLogo size={32} className='text-white hover:text-green-1'/></a>
                        <a href="https://www.linkedin.com/in/clara-araujo-mp/" target='blank'><LinkedinLogo size={32} className='text-white hover:text-green-1'/></a>
                    </div>
                </div>
                <div className='w-[280px] flex flex-col justify-center items-center bg-green-2  p-5 rounded-lg hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                    <img src="https://ik.imagekit.io/iixrkkdfp/Time/55850170.png?updatedAt=1725923593130" alt="foto de perfil Larissa" width={150} height={150} className='rounded-full mb-4' />
                    <p className='text-2xl font-bold text-white'>Larissa Angioni</p>
                    <span className='mb-2 text-white'>Desenvolvedora FullStack</span>
                    <div className='flex gap-x-2'>
                        <a href="https://github.com/LarissaAngioni" target='blank'><GithubLogo size={32} className='text-white hover:text-green-1'/></a>
                        <a href="https://www.linkedin.com/in/larissaangioni/"  target='blank'><LinkedinLogo size={32} className='text-white hover:text-green-1'/></a>
                    </div>
                </div>
                <div className='w-[280px] flex flex-col justify-center items-center bg-green-2 p-5 rounded-lg hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                    <img src="https://ik.imagekit.io/iixrkkdfp/Time/1718931946963.jfif?updatedAt=1725923592891" alt="foto de perfil Pamela" width={150} height={150} className='rounded-full mb-4' />
                    <p className='text-2xl font-bold text-white'>Pamela Salgado</p>
                    <span className='mb-2 text-white'>Desenvolvedora FullStack</span>
                    <div className='flex gap-x-2'>
                        <a href="https://github.com/pamelalmeidaa"  target='blank'><GithubLogo size={32} className='text-white hover:text-green-1'/></a>
                        <a href="https://www.linkedin.com/in/pamelasalgadoa/"  target='blank'><LinkedinLogo size={32} className='text-white hover:text-green-1'/></a>
                    </div>
                </div>
                <div className='w-[280px] flex flex-col justify-center items-center bg-green-2 p-5 rounded-lg hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                    <img src="https://ik.imagekit.io/iixrkkdfp/Time/GLS3259.jpg?updatedAt=1725923594879" alt="foto de perfil Paulo" width={150} height={150} className='rounded-full mb-4' />
                    <p className='text-2xl font-bold text-white'>Paulo Dante</p>
                    <span className='mb-2 text-white'>Desenvolvedor FullStack</span>
                    <div className='flex gap-x-2'>
                        <a href="https://github.com/dantekhann"  target='blank'><GithubLogo size={32} className='text-white hover:text-green-1'/></a>
                        <a href="https://www.linkedin.com/in/paulo-dante/"  target='blank'><LinkedinLogo size={32} className='text-white hover:text-green-1'/></a>
                    </div>
                </div>
                <div className='w-[280px] flex flex-col justify-center items-center bg-green-2 p-5 rounded-lg hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                    <img src="https://ik.imagekit.io/iixrkkdfp/Time/_GLS3197%20(1).jpg?updatedAt=1725923594580" alt="foto de perfil Tayluan" width={150} height={150} className='rounded-full mb-4'  />
                    <p className='text-2xl font-bold text-white'>Tayluan Santos</p>
                    <span className='mb-2 text-white'>Desenvolvedor FullStack</span>
                    <div className='flex gap-x-2'>
                        <a href="https://github.com/TayluanSantos"  target='blank'><GithubLogo size={32} className='text-white hover:text-green-1'/></a>
                        <a href="https://www.linkedin.com/in/tayluan-de-jesus-dos-santos/"  target='blank'><LinkedinLogo size={32} className='text-white hover:text-green-1'/></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sobre