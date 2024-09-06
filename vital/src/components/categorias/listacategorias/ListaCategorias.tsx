import { useNavigate } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import CardCategoria from "../cardcategoria/CardCategoria"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import { DNA } from "react-loader-spinner"

function ListaCategorias() {
    const navigate = useNavigate()
    const [categorias, setCategoria] = useState<Categoria[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar(`/categorias`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }
    
    useEffect(() => {
        if (token === '') {
           alert('Você precisa estar logado!')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])


  return (
    <>
         {
                categorias.length === 0 && (
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                    />
                )
            }
        <div className='min-h-screen bg-green-2 flex justify-center'>
            <div className="w-3/4 flex items-center justify-center">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {categorias.map((categoria) => (
                        <CardCategoria key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            </div>
        </div>
    </>
    
  )
}

export default ListaCategorias