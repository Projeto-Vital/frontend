import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { BookmarkSimple } from "@phosphor-icons/react";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const notas = Math.floor(Math.random() * 40) + 20;
  const crm1 = Math.floor(Math.random() * 20) + 10;
  const crm2 = Math.floor(Math.random() * 10000) + 1000;
  const dia = Math.floor(Math.random() * 10) + 1;
  const dia2 = Math.floor(Math.random() * 10) + 1;
  const consultas = Math.floor(Math.random() * 100) + 40;
  const min = Math.floor(Math.random() * 50) + 20;

  return (
    <div className="bg-grey-1 shadow-2xl rounded-lg p-4  lg:p-8 grid lg:grid-cols-2 grid-cols-1 gap-20">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="flex flex-col items-center">
          <img
            src={produto.usuario?.foto}
            alt="foto do profissional"
            className="w-20 h-20 rounded-full"
          />
          <p className="text-2xl font-semibold mt-2">R${produto.preco}</p>
          <p className="text-gray-500">{min} min</p>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold break-words">{produto.usuario?.nome}</h2>
            <button className="p-2 rounded-md flex items-center text-green-3">
              <BookmarkSimple size={26} color="#3F6212" /> 
            Favoritar
            </button>
          </div>
          <p className="text-gray-500">CRP {crm1}/{crm2}</p>
          <p className="text-sm text-green-2  font-semibold">{produto.nome}</p>
          <p className="text-sm text-gray-700 break-words">{produto.categoria.categoria}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-1 font-bold text-lg">★★★★★</span>
            <span className="text-green-1">({notas})</span>
          </div>
          <div className="flex gap-6 mt-2 flex-wrap">
            <div className="flex items-center space-x-1">
              <span>🗓️</span>
              <span>{dia} anos, {dia2} meses</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>😊</span>
              <span>{consultas} consultas realizadas</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link to={`/deletarProduto/${produto.id}`}>
              <button className="border rounded font-semibold border-green-2 text-green-3 py-1 px-2 hover:bg-green-1 hover:text-white hover:shadow-lg hover:border-none">Deletar</button>
            </Link>
            <Link to={`/editarProduto/${produto.id}`}>
              <button className="border rounded font-semibold border-green-2 text-green-3 py-1 px-2 hover:bg-green-1 hover:text-white hover:shadow-lg hover:border-none">Atualizar</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs lg:max-w-md flex flex-col items-center">
          <div className="flex justify-between items-center gap-4 mb-4">
            <button className="text-green-3">{'<'}</button>
            <div className="grid grid-cols-4 gap-2 ">
             
              <div className="text-center  text-xs">
                <p className="text-sm font-semibold bg-grey-1">sex</p>
                <p className="text-xs bg-grey-1">6 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                  <button className="py-2 px-3 rounded-lg  bg-green-1 text-white font-semibold">16:00</button>
                  <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">17:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">18:00</button>
                </div>
              </div>
              <div className="text-center  text-xs">
                <p className="text-sm font-semibold bg-grey-1">sab</p>
                <p className="text-xs bg-grey-1">7 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">17:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">18:00</button>
                </div>
              </div>
              <div className="text-center  text-xs">
                <p className="text-sm font-semibold bg-grey-1">dom</p>
                <p className="text-xs bg-grey-1">8 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">17:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">18:00</button>
                </div>
              </div>
              <div className="text-center  text-xs">
                <p className="text-sm font-semibold bg-grey-1">seg</p>
                <p className="text-xs bg-grey-1">9 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                  <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                  <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">17:00</button>
                  <button className="py-2 px-3 rounded-lg   bg-green-1 text-white font-semibold">18:00</button>
                </div>
              </div>
             
            </div>
            <button className="text-green-3">{'>'}</button>
          </div>
          <button className="py-2 px-4 mt-2 rounded-lg bg-grey-1 text-green-2 hover:bg-green-2 hover:text-white">Agendar</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
