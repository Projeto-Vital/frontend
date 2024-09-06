import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import the Routes component
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import Contato from "./pages/contato/Contato";
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormProduto />} />
              <Route path="/editarProduto/:id" element={<FormProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
