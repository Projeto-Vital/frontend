import { OrangeSlice } from '@phosphor-icons/react'
import React, { ReactNode } from 'react'

interface CardServicosProps {
  icone: ReactNode;
  categoria: string;
  descricao:string;
}
function CardServicos({icone,categoria,descricao}:CardServicosProps) {
  return (
     <div className=' h-[190px] flex flex-col justify-center p-6  rounded-lg w-full bg-green-1 hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
       <div className='flex items-center gap-x-3 mb-2'>
        {icone}
        <p className='font-bold'>{categoria}</p>
       </div>
      <p className='text-sm'>{descricao}</p>
    </div>
  )
}

export default CardServicos