import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import React from 'react'

interface MembroEquipeProps {
  foto:string;
  nome:string;
  cargo:string;
  linkedin:string;
  github:string
}

function MembroEquipe({foto,nome,cargo,linkedin,github}:MembroEquipeProps) {
  return (
    <div className="text-center px-10 flex flex-col items-center">
      <img src={foto} alt="foto de perfil" width={110} height={110} className='rounded-full mb-4' />
      <p className="font-bold text-md">{nome}</p>
      <p className="mb-2">{cargo}</p>
      <div className='flex gap-x-2'>
        <a href={github}  target='blank'><GithubLogo size={32} className=' hover:text-green-1'/></a>
        <a href={linkedin} target='blank'><LinkedinLogo size={32} className=' hover:text-green-1'/></a>
      </div>
    </div>
  )
}

export default MembroEquipe