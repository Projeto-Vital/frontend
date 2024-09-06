import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import AuthContext from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }


  async function deletarProduto() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`, {
        headers: { Authorization: token }
    });

      alert("Serviço apagado com sucesso!");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        alert("Erro ao apagar o serviço!");
      }
    }

    setIsLoading(false);
    retornar();
  }


  return (
    <div className='mx-auto w-1/3 container min-h-screen flex flex-col justify-center'>
        <h1 className='my-4 text-4xl text-center'>Deletar Serviço</h1>
        <p className='mb-4 font-semibold text-center'>
            Você tem certeza de que deseja apagar o serviço a seguir?</p>
        <div className='flex flex-col justify-between border rounded-lg overflow-hidden'>
            <header 
                className='bg-green-2 px-6 py-2 font-bold text-2xl text-white'>
                {produto.nome}
            </header>
            <p className='bg-slate-200 p-8 h-full text-3xl'>{produto.descricao}</p>
            <div className="flex">
                <button 
                    className='bg-red-1 py-2 w-full text-slate-100 font-bold hover:text-white'
                    onClick={retornar}
                    >
                    Não
                </button>
                <button 
                    className='font-bold hover:text-white flex justify-center items-center bg-green-2 hover:bg-indigo-600 w-full text-slate-100'
                    onClick={deletarProduto}
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
  );
}

export default DeletarProduto;
