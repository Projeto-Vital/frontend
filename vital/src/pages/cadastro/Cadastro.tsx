import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="flex justify-center min-h-screen items-center py-6">
      <div className="flex w-5/6 p-5 rounded-lg shadow-2xl">
        <div className="w-1/2">
          <img className="rounded-lg" src="https://ik.imagekit.io/lari/madison-lavern-4gcqRf3-f2I-unsplash.jpg?updatedAt=1725027068506" alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center py-4">
          <h1 className="text-center font-bold text-3xl">Cadastro</h1>
          <form className="flex flex-col *:p-2">
            <label htmlFor="nome">Nome</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
            />

            <label htmlFor="email">E-mail</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
            />

            <label htmlFor="senha">Senha</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite uma senha"
            />

            <label htmlFor="senhaConfirmada">Confirmar Senha</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="password"
              name="senhaConfirmada"
              id="senhaConfirmada"
              placeholder="Digite a mesma senha"
            />

            <label htmlFor="foto">Foto de Perfil</label>
            <input
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg"
              type="file"
              name="foto"
              id="foto"
              placeholder="Insira a url da sua foto"
            />

            <label htmlFor="user-select">Tipo de Usuário</label>

            <select
              className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg "
              name="user"
              id="user-select"
            >
              <option disabled selected value="">
                --Selecione o tipo de usuário--
              </option>
              <option value="paciente">Usuário Paciente</option>
              <option value="profissional">Usuário Profissional</option>
            </select>

            
            <button className="bg-green-2 rounded-lg m-4 hover:bg-green-1 text-white">Criar Conta</button>
     
          </form>
          <p>Já tem conta? 
            <Link to="/login"> Entre aqui</Link> 
            </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
