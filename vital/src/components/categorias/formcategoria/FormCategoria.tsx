import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import AuthContext from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormCategoria() {
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
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/categorias')
    }
    async function cadastrarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                alert('Categoria atualizada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Categoria!')
                }
            }

        } else {

            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                alert('Categoria cadastrada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Categoria!')
                }
            }

        }

        setIsLoading(false)
        retornar()
    }

  return (
    <>
        <div className="flex justify-center min-h-screen items-center py-6 bg-green-1">
         <div className="flex w-3/5 p-5 rounded-lg bg-white shadow-2xl">
            <div className='flex flex-col justify-center items-center w-full p-8 '>
               <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-4xl font-bold text-green-2 mb-2'> 
                        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                    </h2>
                    <p className='mb-4 text-sm'>Cadastre ou edite dados de uma categoria</p>
               </div>
               <form action="" className='flex flex-col w-full p-5 gap-2' onSubmit={cadastrarCategoria} >
                    <label htmlFor="email">Nome da Categoria</label>
                    <input
                        className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-3"
                        type="text"
                        name="categoria"
                        id="categoria"
                        placeholder="Nome da Categoria"
                        value={categoria.categoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                     <label htmlFor="email">Descrição</label>
                     <input
                        className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-3"
                        type="text"
                        name="descricao"
                        id="descricao"
                        placeholder="Descrição"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                     <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center
                                  bg-green-2 hover:bg-green-1 text-white mt-5 py-3 w-full">

                        {isLoading ?
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />: <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                            }
                    </button>
               </form>
            </div>   
         </div>
        </div>
    </>
  )
}

export default FormCategoria