import React from 'react'
import { API_CONFIG, type Plato } from '../types/index'

interface PlatoCardProps {
    plato: Plato;

}
const PlatoCard = ({ plato }: PlatoCardProps) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'>
      <div className='relative h-48 overflow-hidden'>
        <img className='w-full h-full object-cover group-hover: scale-110 transition-transform duration-500' 
        src={`${API_CONFIG.BASE_URL}${plato.imagen}`} 
        alt={plato.nombre} />
        <div className='absolute top-4 right-4 bg-amber-100 px-3 rounded-full text-xs font-bold text-orange-600 shadow-sm'>
            {plato.categoria}
        </div>
      </div>
      <div className='p-6'>
        <div className='flex justify-between mb-3'>
          <h3 className='text-xl font-bold text-gray-800'>{plato.nombre}</h3>
          <span className='text-sm font-medium text-gray-500 bg-gray-50 px-2 py-2 rounded'>{plato.calorias} kcal</span>
          <div>
            <p className='text-gray-400 font-bold'>
              Ingredientes:
            </p>
            <div>
              {plato.ingredientes.map((ingrediente,index)=>(
                <span 
                key={index}
                className='text-[10px] px-2 py-2 bg-orange-50 text-orange-600 rounded-md border-orange-200'>
                  {ingrediente}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatoCard
