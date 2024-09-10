import { useEffect, useState } from "react"
import { buscar } from "../../../services/Service"
import Produto from "../../../models/Produto"
import CardProduto from "../cardproduto/CardProduto"
import { useNavigate } from "react-router-dom"

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    const navigate = useNavigate()

    async function buscarProdutos() {

        try{
          await buscar(`/produtos`,(produtosOrdenados:Produto[]) => {
          const listaProdutos = produtosOrdenados.sort((a,b) => a.id - b.id)
          setProdutos(listaProdutos) ;
          }
        )
    
        } catch (error){
          alert('Houve um erro!')
          navigate("/")
          
        }
        
      }
    
      useEffect(() =>{
        buscarProdutos()
      }, [produtos.length])

  return (
    <div className="bg-green-2">
        <div className="container  mx-auto py-24 grid grid-cols-1 gap-14">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto= {produto} />
        ))}
        </div>
    </div>
  )
}

export default ListaProdutos