import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav className={`shadow-lg transition-colors ${
      isDark 
        ? 'bg-gradient-to-r from-red-800 via-red-700 to-red-800' 
        : 'bg-gradient-to-r from-red-600 via-red-500 to-red-600'
    }`}>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex items-center justify-center gap-6'>
          <NavLink 
            to='/'  
            className={({ isActive }) => 
              isActive 
                ? `${isDark ? 'bg-gray-800 text-red-400' : 'bg-white text-red-600'} px-6 py-3 rounded-lg font-bold shadow-xl transform scale-105 transition-all` 
                : 'text-white px-6 py-3 rounded-lg hover:bg-white/20 hover:scale-105 transition-all font-semibold backdrop-blur-sm border border-white/30'
            }
          >
            Pokemons
          </NavLink>
          <NavLink 
            to='/types'  
            className={({ isActive }) => 
              isActive 
                ? `${isDark ? 'bg-gray-800 text-red-400' : 'bg-white text-red-600'} px-6 py-3 rounded-lg font-bold shadow-xl transform scale-105 transition-all` 
                : 'text-white px-6 py-3 rounded-lg hover:bg-white/20 hover:scale-105 transition-all font-semibold backdrop-blur-sm border border-white/30'
            }
          >
            Tipos
          </NavLink>   
          <NavLink 
            to='/games'  
            className={({ isActive }) => 
              isActive 
                ? `${isDark ? 'bg-gray-800 text-red-400' : 'bg-white text-red-600'} px-6 py-3 rounded-lg font-bold shadow-xl transform scale-105 transition-all` 
                : 'text-white px-6 py-3 rounded-lg hover:bg-white/20 hover:scale-105 transition-all font-semibold backdrop-blur-sm border border-white/30'
            }
          >
            Juegos
          </NavLink>         
        </div>
      </div>
      
      {/* Línea decorativa inferior */}
      <div className='h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent'></div>
    </nav>
  )
}

export default NavBar