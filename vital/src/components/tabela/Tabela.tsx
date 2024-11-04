import { ArrowCounterClockwise, Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Categoria from '../../models/Categoria'

interface TabelaProps {
  categorias: Categoria[]
}

function Tabela({ categorias }: TabelaProps) {
  return (
    <table className="border-collapse border border-green-3 min-w-full divide-y divide-grey-1">
      <thead className="bg-green-1">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-6 pr-3 border border-green-3 text-sm font-semibold text-center"
          >
            Categoria
          </th>
          <th
            scope="col"
            className="py-3.5 pl-6 pr-3 border border-green-3 text-sm font-semibold text-center"
          >
            Descrição
          </th>
          <th
            scope="col"
            className="py-3.5 pl-6 pr-3 border border-green-3 text-sm font-semibold text-center"
          >
            Editar Categoria
          </th>
          <th
            scope="col"
            className="py-3.5 pl-6 pr-3 border border-green-3 text-sm font-semibold text-center"
          >
            Deletar Categoria
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-grey-1 bg-white">
        {categorias.map((categoria) => (
          <tr key={categoria.id}>
            <td className="whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6">
              {categoria.categoria}
            </td>
            <td className="whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6">
              {categoria.descricao}
            </td>
            <td className="whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6">
              <Link
                to={`/editarCategoria/${categoria.id}`}
                className="w-full text-white bg-green-2 hover:bg-green-1 duration-300 flex items-center justify-center rounded-lg p-2"
              >
                <button className="flex gap-x-1 items-center">
                  <ArrowCounterClockwise size={20} color="#ffff" />
                  Editar
                </button>
              </Link>
            </td>
            <td className="whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6">
              <Link
                to={`/deletarCategoria/${categoria.id}`}
                className="text-white bg-red-3 hover:bg-red-1 duration-300 w-full flex items-center justify-center rounded-lg p-2"
              >
                <button className="flex gap-x-1 items-center">
                  <Trash size={20} color="#ffff" />
                  Deletar
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tabela
