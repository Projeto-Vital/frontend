import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { RotatingLines } from "react-loader-spinner";
import AuthContext from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, categoria: '', descricao:''})
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado','info');
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        let value: any
        if (e.target.name === 'preco'){
            value = parseFloat(Number(e.target.value).toFixed(2))
        } else {
            value = e.target.value
        }
        setProduto({
            ...produto,
            [e.target.name]: value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function cadastraProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined && produto.usuario.id !== usuario.id) {
            ToastAlerta("Você não tem permissão para editar este produto.", "erro");
            navigate('/produtos');
            setIsLoading(false);
            return; // Interrompe a execução
        }
    

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token,
                    },
                });

                ToastAlerta('Serviço atualizado com sucesso','sucesso')

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar o serviço','erro')
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token,
                    },
                })

                ToastAlerta('Serviço cadastrado com sucesso','sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar o serviço','erro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.categoria === '';
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 min-h-screen w-full'>

            <div className='hidden sm:block relative'>
                <div className='absolute top-[25%] left-[10%] flex flex-col'>
                <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-white py-5'>Faça parte da Vital<span className='text-green-2'>+</span></h1>
                <div className='max-w-[500px] p-2'>
                    <p className='text-xl text-white'>Faça parte de uma comunidade de profissionais comprometidos com a saúde e o bem-estar.
                         Junte-se aos especialistas que integram a Vital+ e colabore em um ambiente inovador, 
                        onde o conhecimento e a experiência se unem para transformar vidas</p>
                </div>
                </div>
                <img className='w-full h-full object-cover object-center 'src="https://ik.imagekit.io/iixrkkdfp/erika-fletcher-GJwgw_XqooQ-unsplash.jpg?updatedAt=1725989060006" alt="imagem de login" />
            </div>
            
            <div className='flex flex-col justify-center p-4'>
                <form className='max-w-[450px] w-full mx-auto bg-white p-4' onSubmit={cadastraProduto} >
                    <h2 className='text-4xl sm:text-5xl font-bold text-center py-3 text-green-2'> {id !== undefined ? 'Atualizar Serviço' : 'Cadastrar Serviço'}</h2>
                    <p className='text-center pb-6'> 
                        {id !== undefined ? 'Atualize as informações do seu serviço' : 'Cadastre-se agora e faça parte do time Vital+'}
                    </p>
                   
                    <div className='flex flex-col py-2'>
                        <label htmlFor='nome' className='text-green-3 mb-1'>Nome do Serviço</label>
                        <input 
                            className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                            placeholder='Insira o nome do serviço'
                            type="text" 
                            name="nome" 
                            required
                            id="nome"
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label htmlFor='descricao' className='text-green-3 mb-1'>Descrição do Serviço</label>
                        <input
                        className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                        placeholder='Descrição do serviço' 
                        type="text" 
                        name="descricao" 
                        id="descricao" 
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label htmlFor='preco'className='text-green-3 mb-1'>Preço</label>
                        <input
                        className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                        placeholder='Preço do Serviço' 
                        type="number" 
                        name="preco" 
                        id="preco" 
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label htmlFor='Foto' className='text-green-3 mb-1'>Foto</label>
                        <input
                        className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                        placeholder='Insira uma foto' 
                        type="text" 
                        name="foto" 
                        id="foto" 
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className='flex flex-col py-2'>
                        <p className='text-green-3 mb-1'>Categoria do Serviço</p>
                        <select name="categoria" id="categoria" className='border-slate-800 p-2 border rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                            <option value="" selected disabled>Selecione uma Categoria</option>
                             {categorias.map((categoria) => (
                             <>
                                <option value={categoria.id} >{categoria.categoria}</option>
                             </>
                        ))}
                        </select>
                    </div>
                    <button type='submit'
                    className='w-full mb-1 py-3 bg-green-2 text-white hover:bg-green-1 disabled:bg-grey-1 disabled:text-grey-3  flex justify-center' 
                    disabled={carregandoCategoria}>  
                    
                    {isLoading ?
                    <RotatingLines
                        strokeColor='white'
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                        /> : <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>}
                    </button>
                    <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center
                                  bg-red-3 hover:bg-red-medium duration-300 text-white py-3 w-full" onClick={retornar}>
                        <span>Cancelar</span>
                    </button>
                </form>
            </div> 
        </div>
    );
}

export default FormProduto;