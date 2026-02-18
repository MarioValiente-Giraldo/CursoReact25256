import { NavLink } from 'react-router-dom'
import '../index.css';


export const NavBar = () => {
  return (
     <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl px-4 mx-auto flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-indigo-700">
            🏠 Incidencias
          </NavLink>
          <div className="space-x-4">
            <NavLink to="/" className='linkClass'>
              Inicio
            </NavLink>
            <NavLink to="/incidents" className='linkClass'>
              Incidencias
            </NavLink>
            {/* <NavLink to="/login" className='linkClass'>
              
            </NavLink> */}
          </div>
        </div>
      </nav>
  )
}
