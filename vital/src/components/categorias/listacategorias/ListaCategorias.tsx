import { Link, useNavigate } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import { Oval } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { ArrowCounterClockwise, PlusCircle, Trash } from "@phosphor-icons/react"

function ListaCategorias() {
    const navigate = useNavigate()
    const [categorias, setCategoria] = useState<Categoria[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar(`/categorias`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }
    
    useEffect(() => {
        if (token === '') {
           ToastAlerta('Você precisa estar logado!','info')
           navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])


  return (
    <>  
      <div className=' flex flex-col p-8'>
        {
          categorias.length === 0 && (
            <Oval
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass="tailspin-wrapper mx-auto mb-2"
              />
              )
        }
        <div className="flex flex-col md:flex-row justify-between mb-5 items-center">
          <div>
            <h2 className="text-xl font-bold text-green-2">Categorias</h2>
            <p>Lista de categorias da Vital+ </p>
          </div>
          <div className="hover:text-white">
            <Link to={`/cadastroCategoria`}
              className='w-full  bg-green-1
              flex items-center justify-center p-3 rounded-lg font-bold'>
              <button className='flex gap-x-1'>
                <PlusCircle size={25}  className="hover:text-white"  />
                Cadatrar Categoria
              </button>
            </Link>
          </div>
        </div>
        <table className='border-collapse border border-green-3 min-w-full divide-y divide-grey-1'>
          <thead className="bg-green-2">
            <tr>
              <th scope='col'className='py-3.5 pl-6 pr-3 text-left border border-green-3 text-sm font-semibold text-center text-white'>
                Categoria
              </th>
              <th scope='col'className='py-3.5 pl-6 pr-3 text-left border border-green-3 text-sm font-semibold text-center text-white'>
                Descrição
              </th>
              <th scope='col'className='py-3.5 pl-6 pr-3 text-left border border-green-3 text-sm font-semibold text-center text-white'>
                Editar Categoria
              </th>
              <th scope='col'className='py-3.5 pl-6 pr-3 text-left border border-green-3 text-sm font-semibold text-center text-white'>
                Deletar Categoria
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-grey-1 bg-white">
            {categorias.map((categoria) => 
              <tr key={categoria.id}>
                <td className='whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6'>
                  {categoria.categoria}
                </td>
                <td className='whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6'>
                  {categoria.descricao}
                </td>
                <td className='whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6'>
                  <Link to={`/editarCategoria/${categoria.id}`}
                    className='w-full text-white bg-purple hover:bg-purple-light
                    flex items-center justify-center rounded-lg p-2'>
                    <button className="flex gap-x-1 items-center">
                      <ArrowCounterClockwise size={20} color="#ffff" />
                      Editar
                    </button>
                  </Link>
                </td>
                <td className='whitespace-nowrap border border-green-2 py-4 pl-4 pr-3 text-sm font-medium text-green-2 sm:pl-6'>
                  <Link to={`/deletarCategoria/${categoria.id}`}
                    className='text-white bg-red-3 hover:bg-red-1 w-full 
                    flex items-center justify-center rounded-lg p-2'>
                    <button className='flex gap-x-1 items-center'>
                      <Trash size={20} color="#ffff" />
                      Deletar
                    </button>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListaCategorias