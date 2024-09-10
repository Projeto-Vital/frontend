import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import UsuarioLogin from '../../models/UsuarioLogin'
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext)
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if(usuario.token !== ''){
        navigate("/")
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
        ...usuarioLogin,
        [e.target.name]: e.target.value,
    })
  } 
  function login(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    handleLogin(usuarioLogin)
  }


  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='flex flex-col justify-center px-4'>
          <form className='max-w-[450px] w-full mx-auto bg-white p-4'onSubmit={login}>

            <h2 className='text-4xl sm:text-5xl font-bold text-center py-3 text-green-2'>Bem-Vindo a Vital+</h2>
            <p className='text-center pb-6'>Entre com seu email e senha para continuar</p>
            <div className='flex flex-col py-2'>
              <label className='text-green-3 mb-1'>Email</label>
              <input 
                className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                placeholder='Digite o seu email'
                type="email" 
                name="usuario" 
                id="usuario"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <div className='flex flex-col py-2'>
              <label className='text-green-3 mb-1'>Senha</label>
              <input
               className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
               placeholder='Digite sua senha' 
               type="password" 
               name="senha" 
               id="senha" 
               value={usuarioLogin.senha}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
               />
            </div>
            <button type='submit'className='border w-full my-5 py-2 bg-green-2 hover:bg-green-1 text-white flex justify-center'>  
              {isLoading ?
               <RotatingLines
                  strokeColor='white'
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                  /> : <span >Entrar</span>}
            </button>
            <div className='text-center'>
              <p>Ainda não tem uma conta?
                <Link to='/cadastro'><span className='font-bold text-green-2 hover:underline mx-1'>Cadastre-se</span></Link>
              </p>
            </div>
          </form>
        </div> 
        <div className='hidden sm:block relative'>
          <div className='absolute top-[30%] left-[10%] flex flex-col'>
            <h1 className='text-8xl font-bold text-white py-4'>Vital<span className='text-green-2'>+</span></h1>
            <div className='max-w-[450px] p-2'>
              <p className='text-xl text-white'>Faça login e continue-se conectado ao seu bem-estar. Acesse sua conta para continuar aproveitando nossos serviços.</p>
            </div>
           </div>
          <img className='w-full h-full object-cover object-center 'src="https://ik.imagekit.io/iixrkkdfp/carl-barcelo-nqUHQkuVj3c-unsplash.jpg?updatedAt=1725385153115" alt="imagem de login" />
        </div>
      </div>
    </>
  )
}

export default Login