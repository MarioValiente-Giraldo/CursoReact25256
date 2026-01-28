import  { Suspense, useEffect, useState } from 'react'
import PlatosList from './components/PlatosList'
import Header from './components/Header'
import LoadingFallBack from './components/LoadingFallBack'
import { fecthPlatos } from './utils/api'
import Search from './components/Search'

/**
 * Componente principal de la aplicación que gestiona la lista de platos
 * con búsqueda en tiempo real y actualización automática cada 3 segundos.
 */
const App = () => {
  // Estado que almacena la promesa de los platos obtenidos de la API
  const [platosPromise, setPlatosPromise] = useState(() => fecthPlatos())
  // Estado que almacena el término de búsqueda del usuario
  const [query, setQuery] = useState("")
  
  //Debounce de 3 segundos  
    useEffect(() => {
    // Si el query está vacío, no hacemos nada
    if (query.trim() === "") {
      return;
    }
    
    // Espera 3 segundos desde el último cambio
    const timeout = setTimeout(() => {
      const nuevaPromesa = fecthPlatos().then(platos => 
        platos.filter(plato => 
          plato.nombre.toLowerCase().includes(query.toLowerCase())
        )
      );
      setPlatosPromise(nuevaPromesa);
    }, 3000);
    
    // Limpia el timeout si el usuario sigue escribiendo
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className='min-h-screen bg-gray-50 py-8 px-6'>
      <Header />
      <main>
        {/* Componente de búsqueda que actualiza el estado query */}
        <Search onSearchChange={setQuery} />
        {/* Suspense maneja el estado de carga mientras se resuelve la promesa */}
        {/* <ErrorBanding> */}
          <Suspense fallback={<LoadingFallBack message='Matando la rata... 🐀🔫'/>}>
            <PlatosList platosPromise={platosPromise}/>
          </Suspense>
        {/* </ErrorBanding> */}
      </main>
    </div>
  )
}

export default App