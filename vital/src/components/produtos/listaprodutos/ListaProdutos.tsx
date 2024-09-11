import { useEffect, useState } from "react"
import { buscar } from "../../../services/Service"
import Produto from "../../../models/Produto"
import CardProduto from "../cardproduto/CardProduto"
import { useNavigate } from "react-router-dom"
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Link } from "react-router-dom";
import { PlusCircle } from "@phosphor-icons/react"

function ListaProdutos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [produtos, setProdutos] = useState<Produto[]>([])

  const navigate = useNavigate()

  async function buscarProdutos() {

    try {
      await buscar(`/produtos`, (produtosOrdenados: Produto[]) => {
        const listaProdutos = produtosOrdenados.sort((a, b) => a.id - b.id)
        setProdutos(listaProdutos);
      }
      )

    } catch (error) {
      ToastAlerta('Houve um erro!', 'erro');
      navigate("/");

    }

  }

  useEffect(() => {
    buscarProdutos()
  }, [produtos.length])

  return (
    <div className="bg-green-2 min-h-screen pt-9 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Escolha ou cadastre seu serviço</h2>
          <p className="text-xl text-white mb-3">Encontre o profissional que melhor se adequa as suas necessidades</p>
        </div>
        <div>
          <Link to={`/cadastroProduto`}>
            <button className="flex items-center gap-x-1 border rounded font-semibold bg-white text-green-3 py-2 px-3  hover:shadow-lg hover:border-none">
              <PlusCircle size={32} color="#437228" />
              <span>Cadastrar</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-12 grid grid-cols-1 gap-14">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
     
    </div>
  )
}

export default ListaProdutos