import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import AuthContext from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function FormCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate('/categorias');
    }

    async function cadastrarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('Categoria atualizada com sucesso!', 'sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar a Categoria!', 'erro');
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('Categoria cadastrada com sucesso!', 'sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar a Categoria!', 'erro');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <>
            <div className='flex justify-center items-center min-h-screen bg-green-1'>
                <div className="flex p-5 rounded-lg shadow-2xl max-w-[650px] bg-white">
                    <div className='flex flex-col justify-center items-center w-full p-8'>
                        <div className='flex flex-col gap-y-2 items-center justify-center'>
                            <h2 className='text-5xl font-bold text-green-2 mb-2 text-center'>
                                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                            </h2>
                            <p className='mb-4 text-md text-center'>Cadastre ou edite dados de uma categoria</p>
                        </div>
                        <form action="" className='flex flex-col w-full p-5 gap-2' onSubmit={cadastrarCategoria}>
                            <label className='text-green-2' htmlFor="email">Nome da Categoria</label>
                            <input
                                className="border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg"
                                type="text"
                                name="categoria"
                                id="categoria"
                                placeholder="Nome da Categoria"
                                value={categoria.categoria}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                            <label className='text-green-2' htmlFor="email">Descrição</label>
                            <input
                                className="border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg"
                                type="text"
                                name="descricao"
                                id="descricao"
                                placeholder="Descrição"
                                value={categoria.descricao}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                            <button
                                type='submit'
                                className="rounded bg-indigo-400 flex justify-center bg-green-2 hover:bg-green-1 duration-300 text-white mt-5 py-3 w-full">
                                {isLoading ? (
                                    <RotatingLines
                                        strokeColor='white'
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                                )}
                            </button>
                            <button
                                type='submit'
                                className="rounded bg-indigo-400 flex justify-center bg-red-3 hover:bg-red-medium duration-300 text-white py-3 w-full"
                                onClick={retornar}>
                                <span>Cancelar</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormCategoria;
