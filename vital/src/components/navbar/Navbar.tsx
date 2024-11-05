import { List, SignOut, UserCircle, X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  function toggleMenu() {
    setisOpen(!isOpen);
  }

  function logout() {
    handleLogout();
    ToastAlerta('O usuário foi desconectado com sucesso!', 'sucesso');
    navigate('/login');
  }

  return (
    <>
      <header className='flex justify-center bg-white text-green-3 text-sm md:text-sm w-full'>
        <nav className="shadow-md flex justify-around items-center w-full">
          <div>
            <Link to='/'>
              <img src="https://ik.imagekit.io/iixrkkdfp/Loja%20Games%20/vita.png?updatedAt=1725320162845" alt="" width={70} height={70} />
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            <ul className='lg:flex gap-6 mx-0 *:font-bold hidden'>
              <li className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0">
                <Link to={'/produtos'}>Serviços</Link>
              </li>
              <li className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0">
                <Link to='/funcionalidade'>Como funciona</Link>
              </li>
              <li className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0">
                <Link to='/sobre'>Quem Somos</Link>
              </li>
              <li className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0">
                <Link to='/contato'>Contato</Link>
              </li>
              <li className={`relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0 ${usuario.tipo === 3 ? 'block' : 'hidden'}`}>
                <Link to='/categorias'>Categorias </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <div className="lg:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <X size={32} /> : <List size={32} />}
              </button>
            </div>

            <div className="hidden lg:flex items-center">
              <div>
                <UserCircle size={32} />
              </div>
              {token === '' ?
                <Link to='/login'>
                  <span className="mx-2 font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0">Entre</span>
                </Link> :
                <span className="mx-2 font-bold cursor-pointer">Olá, {usuario.nome}</span>
              }

              {token === '' ?
                <Link to='/cadastro'>
                  <span className="mx-2 font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-1 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:scale-x-0 cursor-pointer">Cadastre-se</span>
                </Link> :
                <Link to='/login'>
                  <div className="flex items-center" onClick={logout}>
                    <SignOut size={32} />
                    <span className="mx-2 font-bold hover:underline cursor-pointer">Sair</span>
                  </div>
                </Link>
              }
            </div>
          </div>
  
          <ul className={`lg:hidden space-y-4 px-4 mt-16 py-7 bg-green-2 ${isOpen ? 'block fixed top-0 right-0 left-0 z-10' : 'hidden'}`}>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>
              <Link to={'/produtos'}>Serviços</Link>
            </li>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>
              <Link to='/funcionalidade'>Como Funciona</Link>
            </li>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>
              <Link to='/sobre'>Quem Somos</Link>
            </li>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>
              <Link to='/contato'>Contato</Link>
            </li>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>
              <Link to='/login'>Entrar</Link>
            </li>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>
              <Link to='/cadastro'>Cadastrar</Link>
            </li>
            <li className={`hover:underline cursor-pointer text-white ${usuario.tipo === 3 ? 'block' : 'hidden'}`} onClick={toggleMenu}>
              <Link to='/categorias'>Categorias</Link>
            </li>
          </ul>

        </nav>
      </header>
    </>
  );
}

export default Navbar;
