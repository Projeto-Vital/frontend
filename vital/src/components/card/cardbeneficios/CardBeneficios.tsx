import { CurrencyCircleDollar } from '@phosphor-icons/react'
import React, { ReactNode } from 'react'

interface CardBeneficiosProps {
  icone: ReactNode;
  titulo: string;
  descricao: string;
}
function CardBeneficios({icone,titulo,descricao}:CardBeneficiosProps) {
  return (
    <div className="flex flex-col items-center shadow-lg p-8 rounded-lg w-64 h-52 hover:shadow-green-1 transition duration-300 ease-in-out bg-grey-4">
      {icone}
      <span className="font-bold text-green-1 text-center">{titulo}</span>
      <p className="text-center text-grey-3">{descricao}</p>
    </div>
  )
}

export default CardBeneficios