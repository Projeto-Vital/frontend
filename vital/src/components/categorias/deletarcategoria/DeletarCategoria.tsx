import { useContext, useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import AuthContext from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import { Trash } from '@phosphor-icons/react';

function DeletarCategoria() {
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
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
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/categorias')
    }
    
    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token }
            })
            ToastAlerta('A categoria foi apagada com sucesso!','sucesso')
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else{
                ToastAlerta('Erro ao Excluir a Categoria!','erro')
            }
        }

        setIsLoading(false)
        retornar()
    }
  return (
   <>
    <div className='bg-green-1 min-h-screen flex justify-center items-center px-6'>
        <div className='bg-white shadow-md max-w-[550px] rounded-lg p-8'>
          <div className='flex flex-col gap-y-3 items-center'>
            <Trash size={55} color="#eb0000" />
            <h3 className='font-bold text-4xl text-center'>Deletar Categoria</h3>
            <p className='text-center text-2xl'>Tem certeza de que deseja deletar a categoria <strong>{categoria.categoria}</strong>?</p>
            <div className='flex gap-x-3 justify-center mt-5'>
              <button className='bg-purple hover:bg-purple-light font-bold text-white py-3 px-5 rounded-lg' onClick={retornar}
              >Cancelar</button>
              <button 
                  className='bg-red-3 hover:bg-red-1 font-bold text-white py-3 px-5 rounded-lg'
                  onClick={deletarCategoria}
                >
                  {isLoading ? <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                  /> : <span>Deletar</span>
                  }
                </button>
            </div>
          </div>
        </div>
    </div>
   
   </>
  )
}

export default DeletarCategoria