import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { buscar } from "../../services/Service";


function Slide01() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias(){
      try{
        buscar('/categorias', setCategorias)
      } catch(error){
        alert('Erro ao buscar categoria!')
      }
    }
  
    useEffect(() =>{
      buscarCategorias()
    }, [categorias.length])

    return ( 
        <section >
        <div className="fundoHome flex justify-center">
        <div className="
      container
      grid
      grid-cols-2
     
      items-center justify-center">
       <div className="
        flex
        flex-col
        gap-6
        items-center
        justify-center
        py-4
      
        ">
          <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-white text-4xl font-semibold ">Agende agora sua consulta</h2>
          </div>
          <div>
            <p className="text-2xl font-semibold text-grey-1">Mais de 500 mil especialistas de saúde estão prontos para te ajudar</p>
          </div>
          </div>
          <div className='flex items-center gap-2 '>
          <select
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded py-4 px-52   "
              
              name="categoria"
              id="categoria"
            >
              <option disabled selected value="" className="text-grey-1">
                Escolha a especialidade
              </option>
              
                {categorias.map((categoria) => (
                  <option key={categoria.id} > {categoria.categoria} </option>
                ))}
            
              
          </select>
          <div>
            <button className="py-4 px-8 bg-green-3 rounded text-white">Pesquisar</button>
          </div>
          </div>
        </div>
        
        
        
        </div>
        </div>
        
      </section>
    )
}

export default Slide01