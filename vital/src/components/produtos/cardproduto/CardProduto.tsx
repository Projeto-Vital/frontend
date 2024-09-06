import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 grid grid-cols-2  items-start">
      <div className="flex items-start space-x-4">
        <div className="flex flex-col gap-4">
          <img
            src={produto.foto}
            alt="Professional"
            className="w-20 h-20 rounded-full"
          />
          <p className="text-2xl font-semibold">R${produto.preco}</p>
          <p className="text-gray-500">50 min</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{produto.nome}</h2>
            <button className="text-orange-600 font-bold">Favoritar</button>
          </div>
          <p className="text-gray-500">CRP 16/5257</p>
          <p className="text-sm text-gray-700">
            {produto?.categoria.categoria}
          </p>
          <p className="">{produto.descricao}</p>
          <div className="flex items-center gap-1">
            <span className="text-orange-500 text-lg">★★★★★</span>
            <span className="text-gray-500">(26)</span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center space-x-1">
              <span>🗓️</span>
              <span>4 anos, 3 meses</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>😊</span>
              <span>740 consultas realizadas</span>
            </div>
          </div>
          <div className="mt-14">
            <Link to={`/deletarProduto/${produto.id}`}>
              <button>Deletar</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-white shadow-md rounded-lg p-4  max-w-xl ">
          <div className="flex justify-between items-center mb-4">
            <button className="text-orange-600">{"<"}</button>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <p className="text-sm font-semibold">sex</p>
                <p className="text-xs text-gray-500">6 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    16:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">sab</p>
                <p className="text-xs text-gray-500">7 set</p>
                {/* <div className="flex flex-col gap-2">
                                    <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">13:00</button>
                                    <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">16:00</button>
                                </div> */}
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">dom</p>
                <p className="text-xs text-gray-500">8 set</p>
                {/* <div className="flex flex-col gap-2">
                                    <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">13:00</button>
                                    <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">16:00</button>
                                </div> */}
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">seg</p>
                <p className="text-xs text-gray-500">9 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    16:00
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">ter</p>
                <p className="text-xs text-gray-500">10 set</p>
                <div className="flex flex-col gap-2">
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    13:00
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-green-100 text-green-600">
                    16:00
                  </button>
                </div>
              </div>
            </div>
            <button className="text-orange-600">{">"}</button>
          </div>
          <button className="w-full py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
