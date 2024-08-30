import { EnvelopeSimple, GithubLogo, InstagramLogo, MapPin, YoutubeLogo } from "@phosphor-icons/react";

function Footer() {

  let date = new Date().getFullYear()

  return (
    <div className="flex flex-col w-full justify-end bg-grey-1">
      <div className="flex flex-col items-center justify-center w-full py-16 ">
        <div className="container flex flex-wrap justify-around gap-x-20">
         
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold  text-green-2">Contato</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 not-italic">
                <div className="flex items-center gap-3">
                  <MapPin size={30} color="#437228" /> 
                  <p className="hover:text-green-3">Rio de Janeiro</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-3 mb-10">
                  <EnvelopeSimple size={30} color="#437228" />
                  <p className="hover:text-green-3">pi.saude.bemestar@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-bold mb-1  text-green-2 ">Siga-nos</p>
              <div className="flex gap-3">
                <YoutubeLogo size={30} color="#437228" />
                <InstagramLogo size={30} color="#437228" />
                <GithubLogo size={30} color="#437228"/>
              </div>
            </div>
          </div>


          <div className="flex flex-col  gap-3">
            <p className="text-lg font-bold  text-green-2">Categorias</p>
            <ul className="flex flex-col gap-2">
              <li><a className="py-2 text-sm hover:text-green-3" href="">Personal</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Psicólogo</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Nutricionista</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Terapeuta</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Yoga</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Fisioterapeuta</a></li>

            </ul>
          </div>

          
          <div className="flex flex-col  gap-3">
            <p className="text-lg font-bold text-green-2">Institucional</p>
            <ul className="flex flex-col gap-2">
              <li><a className="py-2 text-sm hover:text-green-3 " href="">Serviços</a></li>
              <li><a className="py-2 text-sm hover:text-green-3 " href="">Quem Somos</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Contatos</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Entrar</a></li>
              <li><a className="py-2 text-sm hover:text-green-3" href="">Cadastrar</a></li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="w-full border-t border-t-green-2  py-5 text-center ">
        <p className="text-green-3">Copyright @ {date} Vital+ | ODS 03</p>
      </div>
    </div>
  );
}

export default Footer;
