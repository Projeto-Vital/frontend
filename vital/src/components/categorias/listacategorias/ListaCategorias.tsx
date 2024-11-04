import { Link, useNavigate } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { PlusCircle } from "@phosphor-icons/react"
import Tabela from "../../tabela/Tabela"
import Sidebar from "../../sidebar/Sidebar"

function ListaCategorias() {
    const navigate = useNavigate()
    const [categorias, setCategoria] = useState<Categoria[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar(`/categorias`,( categoriasOrdenadas:Categoria[]) => {
              const listaCategorias = categoriasOrdenadas.sort((a,b) => a.id - b.id)
              setCategoria(listaCategorias) ;
            }
          )
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }
    
    useEffect(() => {
        if (token === '') {
           ToastAlerta('Você precisa estar logado!','info')
           navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])


  return (
    <>  
      <div className="flex bg-white">
        <Sidebar/>
        <div className="h-screen w-full">
         <div className="flex justify-between items-center p-5 px-14 ">
          <div>
            <h1 className="text-2xl font-semibold">Categorias</h1>
            <span>Lista de Categorias</span>
          </div>
            <div>
            </div>
              <Link to= "/cadastroCategoria">
                  <button className="flex items-center gap-x-2 bg-green-1 p-3 rounded-lg hover:scale-105 duration-200 ease-in-out">
                    <PlusCircle size={28} />
                    <p>Cadastrar Categoria</p>
                  </button>  
              </Link>
         </div>
         <div className="p-6">
            <Tabela categorias={categorias}/>
         </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias