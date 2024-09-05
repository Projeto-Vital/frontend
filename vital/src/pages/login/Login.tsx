import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import UsuarioLogin from '../../models/UsuarioLogin'
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext)
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if(usuario.token !== ''){
        navigate("/home")
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
    <div className="flex justify-center min-h-screen items-center py-6 bg-green-1">
         <div className="flex w-3/5 p-5 rounded-lg bg-white shadow-2xl">
            <div className="w-1/2">
                <img className="rounded-lg min-h-full object-cover" src="https://ik.imagekit.io/iixrkkdfp/alan-caishan-cU53ZFBr3lk-unsplash.jpg?updatedAt=1725033159321" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 p-8 '>
               <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl font-bold text-green-2'>Bem-Vindo a Vital+</h2>
                    <p className='mb-4 text-sm'>Entre com seu email e senha para continuar</p>
               </div>
               <form action="" className='flex flex-col w-full p-5 gap-2' onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input
                        className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
                        type="email"
                        name="usuario"
                        id="usuario"
                        placeholder="Digite seu email"
                        value={usuarioLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                     <label htmlFor="email">Senha</label>
                     <input
                        className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Digite sua senha"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                     <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center
                                  bg-green-2 hover:bg-green-1 text-white mt-5 py-2 w-full">

                        {isLoading ?
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />:<span>Entrar</span>}
                    </button>
               </form>
               <p className='mt-5 '>Ainda não tem uma conta? 
                <Link to = "/cadastro">
                    <span className='ml-1 font-bold text-green-2 hover:underline cursor-pointer'>Cadastre-se</span>
                </Link>
               </p>
            </div>   
         </div>
    </div>
    </>
  )
}

export default Login