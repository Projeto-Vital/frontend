import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";
import { useNavigate } from "react-router-dom";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Link } from "react-router-dom";
import { PlusCircle } from "@phosphor-icons/react";
import AuthContext from "../../../contexts/AuthContext";

function ListaProdutos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar(`/produtos`, (produtosOrdenados: Produto[]) => {
        const listaProdutos = produtosOrdenados.sort((a, b) => a.id - b.id);
        setProdutos(listaProdutos);
      });
    } catch (error) {
      alert("Houve um erro!");
      navigate("/");
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <div className="bg-[#F0F0F0] min-h-screen">
      <div className="bg-green-1 px-6 py-5 flex flex-col gap-y-3 md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold">Profissionais de Saúde</h2>
          <p className="font-text text-sm">
            Busque profissionais de saúde de acordo com cada especialidade
          </p>
        </div>
        <Link to="/cadastroProduto">
          <button
            className={`${
              token === "" || usuario.tipo === 1
                ? "hidden"
                : "px-5 py-2 bg-white rounded-lg font-semibold flex items-center gap-x-2 hover:scale-105 duration-300 ease-in-out"
            }`}
          >
            <PlusCircle size={32} color="#000000" />
            <span className="font-semibold text-center">Cadastrar Serviço</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-y-6 justify-center items-center py-8">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ListaProdutos;
