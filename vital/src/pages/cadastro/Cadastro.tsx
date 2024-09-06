import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";



function Cadastro() {
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
      alert('Usuário cadastrado com sucesso!');

    } catch (error) {
      alert('Erro ao cadastrar o usuário!')
    }

  } else {
      alert("Dados estão inconsistentes! Verifique os dados do usuário.");
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
  }
  setIsLoading(false)
}
  return (
    <>
    <div className="flex justify-center min-h-screen items-center bg-green-1 py-8">
      <div className="flex w-5/6 p-5 rounded-lg shadow-2xl bg-white">
        <div className="w-1/2">
          <img className="rounded-lg" src="https://ik.imagekit.io/lari/madison-lavern-4gcqRf3-f2I-unsplash.jpg?updatedAt=1725027068506" alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center py-4">
          <h1 className="text-center font-bold text-3xl text-green-2">Cadastre-se</h1>
          <form className="flex flex-col *:p-2"  onSubmit={cadastrarNovoUsuario}>
            <label htmlFor="nome">Nome</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="email">E-mail</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="email"
              name="usuario"
              id="usuario"
              placeholder="Digite seu email"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="senha">Senha</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite uma senha"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="senhaConfirmada">Confirmar Senha</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="password"
              name="senhaConfirmada"
              id="senhaConfirmada"
              placeholder="Digite a mesma senha"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>  handleConfirmaSenha(e)}
            />

            <label htmlFor="foto">Foto de Perfil</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="file"
              name="foto"
              id="foto"
              placeholder="Insira a url da sua foto"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            {/* <label htmlFor="user-select">Tipo de Usuário</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="number"
              name="tipo"
              id="tipo"
              value={usuario.tipo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            /> */}

            <select
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg "
              name="tipo"
              id="tipo"
              value={usuario.tipo}
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => atualizarEstado(e)}
            >
              <option disabled selected value="">
                --Selecione o tipo de usuário--
              </option>
              <option value="1">Usuário Paciente</option>
              <option value="2">Usuário Profissional</option>
            </select>

            <button
              type='submit'
              className='rounded text-white bg-green-2 my-3 w-full
                           hover:bg-indigo-900 py-2
                           flex justify-center'
            >
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Cadastrar</span>
              }
            </button>
    
          </form>
          <p>
            Já tem conta? 
            <Link to="/login"><span className="text-green-2 hover:underline font-bold">Entre aqui</span></Link> 
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cadastro;
