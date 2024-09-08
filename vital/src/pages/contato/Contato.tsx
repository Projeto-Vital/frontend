import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { RotatingLines } from "react-loader-spinner";

interface Contato {
  assunto: string;
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

function Contato() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSucess, setIsSucess] = useState<boolean>(false);

  const [contato, setContato] = useState<Contato>({} as Contato);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    setContato({
      ...contato,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (isSucess) {
      retornar();
    }
  }, [isSucess]);

  function retornar() {
    navigate("/");
  }

  async function sendMail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          assunto: contato.assunto,
          nome: contato.nome,
          telefone: contato.telefone,
          email: contato.email,
          mensagem: contato.mensagem,
        }
      )
      .then((resposta: any) => {
        alert("Mensagem enviada com sucesso!");
        setIsSucess(true);
      })
      .catch((erro: any) => {
        alert("Erro ao emviar a Mensagem!");
      });

    setIsLoading(false);
  }

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
            onSubmit={sendMail}
            method="POST"
            className="gap-2 flex flex-wrap justify-center"
          >
            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="name"
                placeholder="Digite seu nome"
                value={contato.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                required
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
                value={contato.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                required
                placeholder="Digite seu telefone. Ex: 11988888888"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contato.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                required
                placeholder="Digite seu e-mail"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col flex-wrap w-5/12">
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={contato.assunto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                required
                placeholder="Digite o assunto"
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col flex-wrap w-10/12 gap-3">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={contato.mensagem}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  atualizarEstado(e)
                }
                required
                className="focus:ring focus:ring-green-3 bg-grey-1 rounded-lg p-4"
              />
            </div>
            <button
              className="rounded text-white font-bold bg-red-3
                           hover:bg-red-1 hover:text-black py-2
                           justify-center w-10/12 flex flex-wrap"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white font-bold bg-green-3
                           hover:bg-green-1 hover:text-black py-2
                           justify-center w-10/12 flex flex-wrap"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Enviar</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
