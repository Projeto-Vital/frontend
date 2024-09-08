import { useContext, useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import AuthContext from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';

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
    <div className='mx-auto w-1/3 container min-h-screen flex flex-col justify-center'>
        <h1 className='my-4 text-4xl text-center'>Deletar tema</h1>
        <p className='mb-4 font-semibold text-center'>
            Você tem certeza de que deseja apagar o tema a seguir?</p>
        <div className='flex flex-col justify-between border rounded-lg overflow-hidden'>
            <header 
                className='bg-green-2 px-6 py-2 font-bold text-2xl text-white'>
                Categoria
            </header>
            <p className='bg-slate-200 p-8 h-full text-3xl'>{categoria.categoria}</p>
            <div className="flex">
                <button 
                    className='bg-red-1 py-2 w-full text-slate-100 font-bold hover:text-white'
                    onClick={retornar}
                    >
                    Não
                </button>
                <button 
                    className='font-bold hover:text-white flex justify-center items-center bg-green-2 hover:bg-indigo-600 w-full text-slate-100'
                    onClick={deletarCategoria}
                    >
                    {isLoading ? <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                /> :
                    <span>Sim</span>
                }
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeletarCategoria