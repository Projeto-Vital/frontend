import { ArrowCircleLeft, Gauge, HouseLine, Plus } from '@phosphor-icons/react'
import { ArrowArcLeft } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

function Sidebar() {
  const [open,setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Gauge" },
    { title: "Buscar", src: "Search", },
    { title: "Nutrição", src: "Nutricao",gap:true},
    { title: "Yoga ", src: "Flower" },
    { title: "Personal Trainer", src: "Barbell" },
    { title: "Terapia", src: "Armchair" },
    { title: "Psicologia", src: "Brain" },
    { title: "Psicopedagogia ", src: "Dice"},
  ];
  return (
    <>
     <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-green-1 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/arrow.svg"
          className={`absolute cursor-pointer -right-3 top-16 w-9 
            ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/firstaid.svg"
            className={`cursor-pointer duration-500 w-8 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={` origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          Vital+
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white duration-300 ease-in-out text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.svg`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Sidebar