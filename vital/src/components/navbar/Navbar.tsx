import { List, SignOut, UserCircle, X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate()

  const [isOpen,setisOpen] = useState(false)
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token
  
  function toggleMenu () {
    setisOpen(!isOpen)
    console.log(usuario.tipo)
  }

  function logout() {
    handleLogout()
    alert('O usuário foi desconectado com sucesso!')
    navigate('/login')
}


  return (
    <>
      <header className='flex justify-center shadow-md bg-white text-green-3 text-sm lg:text-base fixed top-0 right-0  w-full'>
      <nav className=" flex justify-around items-center w-full">
         {/* Logo*/}
        <div>     
          <Link to= '/'>
            <img src="https://ik.imagekit.io/iixrkkdfp/Loja%20Games%20/vita.png?updatedAt=1725320162845" alt="" width={70} height={70} />
          </Link>
        </div>
         {/* Lista*/}
        <div className="flex items-center gap-x-4">
          <ul className='lg:flex gap-6 mx-0 *:font-bold hidden'>
            <li className="hover:text-green-1 cursor-pointer"><Link to={'/produtos'}>Serviços</Link></li>
            <li className="hover:text-green-1 cursor-pointer">Como Funciona</li>
            <li className="hover:text-green-1 cursor-pointer"><Link to='/sobre'>Quem Somos</Link></li>
            <li className="hover:text-green-1 cursor-pointer">
              <Link to='/contato'>Contato</Link>
              </li>
            <li className={`hover:text-green-1 cursor-pointer  ${usuario.tipo === 3 ? 'block':'hidden'}`}>
              <Link to = '/categorias'>Categorias </Link>
            </li>
            <li className={`hover:text-green-1 cursor-pointer  ${usuario.tipo === 3 ? 'block':'hidden'}`}>
              <Link to = '/cadastroCategoria'>Cadastrar Categoria </Link>
            </li>
          </ul>
        </div>
      
        <div className="flex items-center">
          {/* Botão Hamburguer*/}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={32} /> : <List size={32} />}
            </button>
          </div>

          {/* Login*/}
          <div className=" hidden md:flex items-center">
            <div><UserCircle size={32}/></div>
              {token === '' ?
                <Link to = '/login'><span className="mx-2 font-bold hover:underline cursor-pointer">Entre</span></Link> :
                <Link to = '/cadastro'><span className="mx-2 font-bold hover:underline cursor-pointer">Olá,{usuario.nome}</span></Link>
              } 

              {token === '' ?
                <Link to = '/cadastro'><span className="mx-2 font-bold hover:underline cursor-pointer">Cadastre-se</span></Link> :
                <Link to = '/login'>
                  <div className="flex items-center">
                    <span className="mx-2 font-bold hover:underline cursor-pointer" onClick={logout}>Sair</span>
                    <SignOut size={32} />
                  </div>
                </Link> 
              }
          </div>
        </div>
        {/* Menu para dispositivos menores*/}
        <ul className={`md:hidden space-y-4 px-4 mt-16 py-7 bg-green-2 ${isOpen ? 'block fixed top-0 right-0 left-0':'hidden'}`}>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>Serviços</li>
            <li className="hover:underline cursor-pointer text-white"onClick={toggleMenu}>Como Funciona</li>
            <li className="hover:underline cursor-pointer text-white"onClick={toggleMenu}><Link to='/sobre'>Quem Somos</Link></li>
            <li className="hover:underline cursor-pointer text-white"onClick={toggleMenu}>Contato</li>
            <li className="hover:underline cursor-pointer text-white hidden"onClick={toggleMenu}><Link to='/sobre'>Cadastrar Categoria</Link></li>
            <li className="hover:underline cursor-pointer text-white hidden"onClick={toggleMenu}>Deletar Categoria</li>
        </ul>

      </nav>
    </header>
   </>
  );
}

export default Navbar;
