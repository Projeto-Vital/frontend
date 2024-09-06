import Categoria from '../../../models/Categoria'
import { Link } from 'react-router-dom'

interface CardCategoriaProps{
    categoria: Categoria
}
function CardCategoria({categoria}:CardCategoriaProps) {
  return (
    <div className='bg-white p-8 text-green-2 justify-center items-center cursor-pointer rounded-lg hover:scale-110 hover:duration-150'>
        <div>
            <p className='text-2xl font-bold mb-3'>{categoria.categoria}</p>
        </div>
        <div className='flex  gap-x-2'>
            <Link to={`/editarCategoria/${categoria.id}`}
                className='w-full text-white bg-green-2 hover:bg-green-1
                    flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>

            <Link to={`/deletarCategoria/${categoria.id}`}
                className='text-white  bg-red-3 hover:bg-red-1 w-full 
		            flex items-center justify-center'>
                <button>Deletar</button>
            </Link>
        </div>
    </div>
  )
}

export default CardCategoria