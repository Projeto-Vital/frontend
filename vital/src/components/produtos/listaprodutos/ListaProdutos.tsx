import { useEffect, useState } from "react"
import { buscar } from "../../../services/Service"
import Produto from "../../../models/Produto"
import CardProduto from "../cardproduto/CardProduto"
import { useNavigate } from "react-router-dom"

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
    <div className="bg-green-2">
      <Link to={`/cadastroProduto`}>
        <button className="border rounded font-semibold border-green-2 text-green-3 py-1 px-2 hover:bg-green-1 hover:text-white hover:shadow-lg hover:border-none">Cadastrar</button>
      </Link>
      <div className="container  mx-auto py-24 grid grid-cols-1 gap-14">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  )
}

export default ListaProdutos