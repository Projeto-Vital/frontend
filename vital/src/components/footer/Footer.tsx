import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, MapPin, YoutubeLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {

  let date = new Date().getFullYear()

  return (
    <footer className=" flex flex-col bg-grey-1">

            <div className=" w-full md:grid grid-cols-3 justify-items-center py-16 px-6">
              <div className="flex flex-col gap-y-3">
                {/* Contatos*/}
                <div>
                  <h3 className="mb-3 text-md text-green-2 font-bold">Contato</h3>
                  {/* Localização*/}
                  <div className="flex items-center gap-x-1 mb-3">
                    <MapPin size={25} color="#437228"/>
                    <p>Rio de Janeiro</p>
                  </div>
                  {/* Email*/}
                  <div className="flex items-center gap-x-1">
                    <EnvelopeSimple size={25} color="#437228"/>
                    <p>pi.saude.bemestar@gmail.com</p>
                  </div>
                </div>

                {/* Redes Sociais*/}
                <div className="mb-4 md:mb-0">
                  <h3 className="text-md my-3 font-bold text-green-2 ">Siga-nos</h3>
                  <div className="flex gap-3">
                    <a href="https://linktr.ee/projetointegradorvitalplus"><LinkedinLogo size={30} color="#437228"/></a>
                    <a href="https://linktr.ee/projetointegradorvitalplus"><GithubLogo size={30} color="#437228"/></a>
                  </div>
                </div>

              </div>

              {/* Categorias*/}
              <div className="flex flex-col gap-1 md:gap-3 mb-5 md:mb-0">
                <h3 className="my-3 md:my-0 text-md text-green-2 font-bold">Categorias</h3>
                <ul className="*:text-green-700">
                  <li className='hover:underline cursor-pointer'>Personal Trainer</li>
                  <li className='hover:underline cursor-pointer'>Psicólogo</li>
                  <li className='hover:underline cursor-pointer'>Nutricionista</li>
                  <li className='hover:underline cursor-pointer'>Terapeuta</li>
                  <li className='hover:underline cursor-pointer'>Yoga</li>
                  <li className='hover:underline cursor-pointer'>Psicopedagogo</li>
                </ul>
              </div>

              {/* Institucional*/}
              <div className="flex flex-col gap-1 md:gap-3">
                <h3 className="my-3 md:my-0 text-md text-green-2 font-bold">Institucional</h3>
                <ul className="*:text-green-700">
                  <Link to = '/produtos'> <li className='hover:underline cursor-pointer'>Serviços</li></Link>
                  <Link to = '/sobre'> <li className='hover:underline cursor-pointer'>Quem Somos</li></Link>
                  <Link to = '/contato'> <li className='hover:underline cursor-pointer'>Contatos</li></Link>
                  <Link to = '/login'> <li className='hover:underline cursor-pointer'>Entrar</li></Link>
                  <Link to = '/cadastro'> <li className='hover:underline cursor-pointer'>Cadastrar</li></Link>
            
                </ul>
              </div>

            </div>

            {/* Copyright*/}
            <div className="flex justify-center items-center py-4 border-t border-t-green-600">
              <p className="text-green-2">Copyright &#169; {date} Vital+ | ODS 3</p>
            </div>
        </footer>
  );
}

export default Footer;
