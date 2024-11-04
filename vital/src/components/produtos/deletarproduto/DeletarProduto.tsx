import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import AuthContext from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Trash } from "@phosphor-icons/react";

function DeletarProduto() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
      ToastAlerta("Você precisa estar logado!","info");
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

    if (id !== undefined && produto.usuario.id !== usuario.id) {
            ToastAlerta("Você não tem permissão para deletar este produto.", "erro");
            navigate('/produtos');
            setIsLoading(false);
            return; // Interrompe a execução
        }

    if(id !== undefined ) {
      try {
        await deletar(`/produtos/${id}`, {
          headers: { Authorization: token }
      });
  
      ToastAlerta("Serviço apagado com sucesso!","sucesso");
    }

    catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao apagar o serviço!","erro");
      }
    }
  }

    setIsLoading(false);
    retornar();
  }


  return (
    <>
       <div className='bg-green-1 min-h-screen flex justify-center items-center px-6'>
        <div className='bg-white shadow-md max-w-[450px] rounded-lg p-8'>
          <div className='flex flex-col gap-y-3 items-center'>
            <Trash size={55} color="#eb0000" />
            <h3 className='font-bold text-4xl text-center'>Deletar Serviço</h3>
            <p className='text-center text-2xl'>Tem certeza de que deseja deletar o serviço?</p>
            <div className='flex gap-x-3 justify-center mt-5'>
              <button className='bg-purple hover:bg-purple-light font-bold text-white py-3 px-5 rounded-lg' onClick={retornar}
              >Cancelar</button>
              <button 
                  className='bg-red-3 hover:bg-red-1 font-bold text-white py-3 px-5 rounded-lg'
                  onClick={deletarProduto}
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
  );
}

export default DeletarProduto;
