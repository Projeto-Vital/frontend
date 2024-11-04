
function Agenda() {
  return (
    <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs lg:max-w-md flex flex-col items-center">
        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="grid grid-cols-5 gap-2">
            
            <div className="text-center text-xs">
              <p className="text-sm font-semibold bg-grey-1">sex</p>
              <p className="text-xs bg-grey-1">6 set</p>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">16:00</button>
                <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">17:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">18:00</button>
              </div>
            </div>
            
            <div className="text-center text-xs">
              <p className="text-sm font-semibold bg-grey-1">sab</p>
              <p className="text-xs bg-grey-1">7 set</p>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">17:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">18:00</button>
              </div>
            </div>

            <div className="text-center text-xs">
              <p className="text-sm font-semibold bg-grey-1">dom</p>
              <p className="text-xs bg-grey-1">8 set</p>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">17:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">18:00</button>
              </div>
            </div>

            <div className="text-center text-xs">
              <p className="text-sm font-semibold bg-grey-1">seg</p>
              <p className="text-xs bg-grey-1">9 set</p>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">17:00</button>
                <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">18:00</button>
              </div>
            </div>
            <div className="text-center text-xs">
              <p className="text-sm font-semibold bg-grey-1">seg</p>
              <p className="text-xs bg-grey-1">9 set</p>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-3 rounded-lg text-green-2">13:00</button>
                <button className="py-2 px-3 rounded-lg text-green-2">16:00</button>
                <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">17:00</button>
                <button className="py-2 px-3 rounded-lg bg-green-1 text-white font-semibold">18:00</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
