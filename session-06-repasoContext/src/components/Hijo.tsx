import { useFamily } from "../hooks/useFamily"
import Nieto from "./Nieto"

const Hijo = () => {
  const {incrementarContador, decrementarContador} =useFamily()
  return (
     <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-orange-400 rounded-lg p-4 bg-orange-50">
        <h1>Hijo</h1>
       <div className="flex gap-2 p-2 bg-slate-900 rounded-2xl w-fit">
          <button 
            type="button" 
            onClick={decrementarContador}
            className="px-6 py-2 bg-slate-800 text-slate-300 rounded-l-xl hover:text-white hover:bg-slate-700 transition-colors border-r border-slate-700"
          >
            −
          </button>
          
          <button 
            type="button" 
            onClick={incrementarContador}
            className="px-6 py-2 bg-slate-800 text-cyan-400 rounded-r-xl hover:text-cyan-300 hover:bg-slate-700 transition-colors"
          >
            +
          </button>
        </div>

         <div className="mt-4 border-4 border-purple-200 rounded-lg">
          <Nieto />
          </div>
      </div>
    </div>
  )
}

export default Hijo
