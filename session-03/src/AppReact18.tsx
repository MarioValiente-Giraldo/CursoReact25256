import React from 'react'
import { useFetch } from './hooks/useFetch'
import { API_CONFIG, type Plato } from './types'
import Header from './components/Header'
import LoadingFallBack from './components/LoadingFallBack'
import PlatoCard from './components/PlatoCard'

const App = () => {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`
  const { data, loading, error } = useFetch<Plato[]>(url)
  return (
    <div>
      <div className='min-h-screen bg-gray-50 py-8 px-6'>
        <Header />
      <main>
        {loading && (<LoadingFallBack message='Matando la rata' />)}
        {error && <div>Error cargando</div>}
        {data && (<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((plato:Plato)=>(
            <PlatoCard key={plato.id} plato={plato} />
          ))}
    </div>)}
          
      </main>
    </div>
    </div>
  )
}

export default App
