import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto{ //export default -> publico na aplicacao

    id: number;
	nome:string;
	descricao: string;
    preco: string;
    foto: string;
    categoria: Categoria ;
    usuario: Usuario| null;
	
}