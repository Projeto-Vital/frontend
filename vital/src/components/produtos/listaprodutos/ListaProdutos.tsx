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
          await buscar('/produtos', setProdutos)
    
        } catch (error){
          alert('Houve um erro!')
          navigate("/")
          
        }
        
      }
    
      useEffect(() =>{
        buscarProdutos()
      }, [produtos.length])

  return (
    <div>
        <div className="container mx-auto my-24 grid grid-cols-1 gap-14">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto= {produto} />
        ))}
        </div>
    </div>
  )
}

export default ListaProdutos