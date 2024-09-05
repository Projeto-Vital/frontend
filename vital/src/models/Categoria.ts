import Produto from "./Produto";


export default interface Categoria{

	id:number;
    categoria: string;
	descricao: string;
	produto?: Produto | null; 

}