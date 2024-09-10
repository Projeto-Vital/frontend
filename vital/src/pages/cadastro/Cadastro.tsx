import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../utils/ToastAlerta";



function Cadastro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: 0
  });

  function retornar() {
    navigate('/login')
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta('Usuário cadastrado com sucesso!','sucesso');

      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!','erro')
      }

    } else {
        ToastAlerta("Dados estão inconsistentes! Verifique os dados do usuário.","erro");
        setUsuario({ ...usuario, senha: '' });
        setConfirmaSenha('');
    }
    setIsLoading(false)
  }
  return (
  
      <div className='grid grid-cols-1 sm:grid-cols-2 min-h-screen w-full'>
        <div className='hidden sm:block relative'>
            <div className='absolute top-[30%] left-[10%] flex flex-col'>
              <h1 className='text-8xl font-bold text-white py-5'>Junte-se a Vital<span className='text-green-2'>+</span></h1>
              <div className='max-w-[450px] p-2'>
                <p className='text-xl text-white'>Cadastre-se e tenha acesso a um mundo de serviços exclusivos, com especialistas capacitados e preços acessíveis.</p>
              </div>
            </div>
            <img className='w-full h-full object-cover object-center 'src="https://ik.imagekit.io/iixrkkdfp/sergio-carpintero-F-HAy5aqoDE-unsplash.jpg?updatedAt=1725737275113" alt="imagem de login" />
        </div>
        <div className='flex flex-col justify-center py-4'>
          <form className='max-w-[450px] w-full mx-auto p-4' onSubmit={cadastrarNovoUsuario}>
            <h2 className='text-4xl sm:text-5xl font-bold text-center py-3 text-green-2'>Cadastre-se</h2>
            <p className='text-center pb-6'>Crie sua conta e tenha acesso aos nossos melhores serviços</p>
            <div className='flex flex-col py-2'>
              <label htmlFor='nome' className='text-green-3 mb-1'>Nome</label>
              <input 
                className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                placeholder='Insira o seu nome'
                type="text" 
                name="nome" 
                id="nome"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor='email' className='text-green-3 mb-1'>Email</label>
              <input
              className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
              placeholder='Insira seu email' 
              type="email" 
              name="usuario" 
              id="usuario" 
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor='senha'className='text-green-3 mb-1'>Senha</label>
              <input
              className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
              placeholder='Insira uma senha' 
              type="password" 
              name="senha" 
              id="senha" 
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor='senhaConfirmada' className='text-green-3 mb-1'>Confirmar Senha</label>
              <input
              className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
              placeholder='Confirme sua senha' 
              type="password" 
              name="senhaConfirmada" 
              id="senhaConfirmada" 
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
              />
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor='foto' className='text-green-3 mb-1'>Foto de Perfil</label>
              <input
              className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
              placeholder='Insira uma foto' 
              type="text" 
              name="foto" 
              id="foto" 
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor='foto' className='text-green-3 mb-1'>Tipo de Usuário</label>
              <select
              className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
              name="tipo"
              id="tipo"
              value={usuario.tipo}
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => atualizarEstado(e)}>
                <option selected>
                  --Selecione o tipo de usuário--
                </option>
                <option value="1">Usuário Paciente</option>
                <option value="2">Usuário Profissional</option>
              </select>
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
              <p>Já possui uma conta?
                <Link to='/login'><span className='font-bold text-green-2 hover:underline mx-1'>Conecte-se</span></Link>
              </p>
            </div>
          </form>
        </div> 
      </div>
  );
}

export default Cadastro;
