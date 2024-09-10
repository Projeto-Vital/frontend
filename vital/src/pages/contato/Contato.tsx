import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../utils/ToastAlerta";

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
        ToastAlerta("Mensagem enviada com sucesso!","sucesso");
        setIsSucess(true);
      })
      .catch((erro: any) => {
        ToastAlerta("Erro ao emviar a Mensagem!","erro");
      });

    setIsLoading(false);
  }

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 min-h-screen w-full'>

      <div className='hidden sm:block relative'>
          <img className='w-full h-full object-cover object-center 'src="https://ik.imagekit.io/iixrkkdfp/ctt%20(1).webp?updatedAt=1725975625955" alt="imagem de login" />
      </div>

      <div className='flex flex-col justify-center p-4'>
        <form className='max-w-[450px] w-full mx-auto bg-white p-4' onSubmit={sendMail} method="POST" >
            <h2 className='text-4xl sm:text-5xl font-bold text-center py-3 text-green-2'> 
              Entre em contato
            </h2>
            <p className='text-center pb-6'> 
              Entre em contato conosco para mais informações
            </p>
            <div className='flex flex-col py-2'>
                <label htmlFor='nome' className='text-green-3 mb-1'>Nome</label>
                <input 
                    className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                    placeholder='Digite seu nome'
                    type="text" 
                    name="nome" 
                    required
                    id="nome"
                    value={contato.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
            </div>

            <div className='flex flex-col py-2'>
                <label htmlFor='telefone' className='text-green-3 mb-1'>Telefone</label>
                <input
                className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                placeholder="Digite seu telefone. Ex: 11988888888"
                required
                type="tel" 
                name="telefone" 
                id="telefone" 
                pattern="[0-9]{11}"
                value={contato.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>

            <div className='flex flex-col py-2'>
                <label htmlFor='email'className='text-green-3 mb-1'>Email</label>
                <input
                className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                placeholder='Digite seu email' 
                required
                type="email" 
                name="email" 
                id="email" 
                value={contato.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>

            <div className='flex flex-col py-2'>
                <label htmlFor='assunto' className='text-green-3 mb-1'>Assunto</label>
                <input
                className='border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg'
                placeholder='Digite o assunto' 
                required
                type="text" 
                name="assunto" 
                id="assunto" 
                value={contato.assunto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor='mensagem' className='text-green-3 mb-1'>Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={contato.mensagem}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    atualizarEstado(e)
                  }
                  required
                  className="border p-2 focus:border-green-2 focus:outline-green-2 rounded-lg"
              />
            </div>
            <button
              className="rounded text-white font-bold bg-red-3
                           hover:bg-red-1 hover:text-black py-2
                           justify-center flex flex-wrap w-full mb-1"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white font-bold bg-green-3
                           hover:bg-green-1 hover:text-black py-2
                           justify-center flex flex-wrap w-full"
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
    </>
  );
}

export default Contato;
