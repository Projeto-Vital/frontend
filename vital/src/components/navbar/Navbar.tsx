import { UserCircle } from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="flex container justify-between items-center w-full mx-auto px-4 py-4">
          <div className="flex-1">
            <a href="/">
              <img
                src="https://ik.imagekit.io/kraz0dx3n/vital+/Logoa-removebg-preview.png?updatedAt=1724785565304"
                alt="Logo-Vital+"
                className="w-1/4 h-auto"
              />
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-2/3">
              <input
                id="busca"
                type="text"
                placeholder="Busque um serviço"
                className="pl-5 py-2 pr-4 border border-green-3 rounded-md focus:outline-none  focus:ring-green-500 w-full"
                style={{ fontSize: '0.75rem' }} 
              />
              
            </div>
          </div>
          <div className="flex  justify-end">
            <nav>
              <ul className="flex gap-8 items-center">
                <li>
                  <a href="" className="
                  font-semibold text-green-2 hover:text-green-1">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="" className="
                  font-semibold text-green-2 hover:text-green-1">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="" className="
                  font-semibold text-green-2 hover:text-green-1">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="" className=" font-semibold text-green-2 hover:text-green-1">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#login"><UserCircle size={28} color="#437228" /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
     
   </>
  );
}

export default Navbar;
