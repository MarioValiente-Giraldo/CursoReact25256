import { useFamily } from "../hooks/useFamily"

const Nieto = () => {
  const { mensaje, setMensaje } = useFamily();

  

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-yellow-400 rounded-2xl p-6 bg-yellow-50 shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-700 mb-2">Nieto</h1>
        <div className="bg-white p-3 rounded-md border border-yellow-200 mb-4 shadow-inner">
           <span className="text-gray-400 text-sm block italic">Mensaje actual:</span>
           <strong className="text-xl text-slate-800">{mensaje}</strong>
        </div>
          <label className="text-sm font-semibold text-yellow-800 ml-1">Cambiar el contexto:</label>
          <input 
            className='px-4 py-2 bg-white text-slate-700 border-2 border-slate-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 shadow-sm' 
            onChange={(e) => setMensaje(e.target.value)}
            value={mensaje}
            placeholder="Escribe algo nuevo..."
          />
          <button 
              type="button"
              onClick={() => setMensaje('')}
              className="mt-2 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 active:scale-95 transition-all shadow-md"
            >
              Reseteo
          </button>      
        </div>
    </div>
  )
}

export default Nieto