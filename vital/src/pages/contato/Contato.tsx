function Contato() {

  return (
    <div className="flex flex-wrap justify-center min-h-screen py-2 items-center">
      <div className="flex w-11/12 bg-white rounded-lg shadow-2xl">
        <div className="w-1/2 flex justify-center">
          <img
            className="rounded-lg w-5/6"
            src="https://ik.imagekit.io/lari/fundo(1).png"
            alt="Imagem de uma figura com formato de uma cabeça humana, com flores branca sainda da cabeça."
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center py-4">
          <h1 className="text-center font-bold text-3xl text-green-2 py-6">
            Entre em Contato
          </h1>
          <form
            action="https://formsubmit.co/5dbd42efb024c145cfd9ea3ac243f81d"
            method="POST"
            className="gap-2 flex flex-wrap justify-center"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/contato"
            ></input>
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="name"
                placeholder="Nome"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                pattern="[0-9]{11}"
                placeholder="Ex: 11988888888"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="subject"
                placeholder="Assunto"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col flex-wrap w-10/12 gap-3">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="message"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-4"
              />
            </div>
            <button
              type="submit"
              className="rounded text-white font-bold bg-green-3
                           hover:bg-green-1 hover:text-black py-2
                           justify-center w-10/12 flex flex-wrap"
            > Enviar </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
