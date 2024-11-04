import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { ArrowClockwise, BookmarkSimple, Calendar, ChatTeardropText, Phone, Star, Trash, UserCircleCheck } from "@phosphor-icons/react";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import Agenda from "../../agenda/Agenda";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const atendimentos = Math.floor(Math.random() * 100) + 40;
  const comentarios = Math.floor(Math.random() * 50) + 20;
  const min = Math.floor(Math.random() * 50) + 20;


  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-md w-5/6">
      <div className="flex flex-col gap-y-5 p-7">

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-x-3">
            <img src={produto.usuario.foto} alt="foto de perfil" className="w-[80px] h-[80px] rounded-lg object-cover" />
            <div>
              <h2 className="text-lg font-bold">{produto.usuario.nome}</h2>
              <p className="font-text text-grey-3 text-sm">{produto.nome}</p>
              <div className="flex mt-1">
                <span><Star size={18} color="#fca327" /></span>
                <span><Star size={18} color="#fca327" /></span>
                <span><Star size={18} color="#fca327" /></span>
                <span><Star size={18} color="#fca327" /></span>
                <span><Star size={18} color="#fca327" /></span>
              </div>
            </div>
          </div>
          <div className={`${token === "" || usuario.tipo === 1 ? "hidden" : "flex gap-y-3 text-sm md:flex-row gap-x-3 mt-4"}`}>
            <Link to={`/editarProduto/${produto.id}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <ArrowClockwise size={20} color="#7b2cbf" />
                <span className="text-purple-light text-sm md:text-base">Editar</span>
              </div>
            </Link>
            <Link to={`/deletarProduto/${produto.id}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <Trash size={20} color="#d90429" />
                <span className="text-red-1 text-sm md:text-base">Deletar</span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <p>{produto.descricao}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-5">
          <div className="flex items-center gap-x-2">
            <ChatTeardropText size={28} />
            <span className="font-bold text-sm">{`Comentários(${comentarios})`}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <UserCircleCheck size={28} />
            <span className="font-bold text-sm">{`Atendimentos(${atendimentos})`}</span>
          </div>
        </div>
        <hr className="border border-grey-4" />

        <div className="flex justify-between items-center">
          <div className="text-xl font-text font-bold">{`${min} minutos`}</div>
          <div className="text-xl font-text font-bold bg-green-1 p-2 rounded-lg">R${produto.preco}</div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5 bg-grey-1 gap-y-5">
        <Agenda />
        <div className="flex gap-x-3">
          <button className="bg-green-1 px-6 py-3 rounded-lg flex items-center gap-x-2 hover:scale-105 duration-300 ease-in-out">
            <Phone size={25} color="#000000" />
            <span className="font-semibold text-sm">Contato</span>
          </button>
          <button className="bg-green-1 px-6 py-3 rounded-lg flex items-center gap-x-2 hover:scale-105 duration-300 ease-in-out">
            <Calendar size={25} color="#000000" />
            <span className="font-semibold text-sm">Agendar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
