import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * Componente Header temático de Pokémon con GIF animado
 */
const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => navigate('/login')
  
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  
  const handleDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <header className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-gray-900 flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src="src\assets\loadingGif.gif" 
                  alt="Loading..." 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg tracking-tight">
                PokéDex
              </h1>
              <p className="text-red-100 text-sm font-medium mt-1">
                Gotta Catch 'Em All!
              </p>
            </div>
          </div>

          {/* Botones Estilizados */}
          <div className="flex items-center gap-3">
            {!user && (
              <button 
                onClick={handleLogin}
                className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full border-b-4 border-blue-700 hover:bg-blue-400 hover:border-blue-500 transition-all active:border-b-0 active:translate-y-1 shadow-lg"
              >
                Iniciar Sesión
              </button>
            )}

            {user && (
              <div className="flex gap-3">
                {user.role === 'admin' && (
                  <button 
                    onClick={handleDashboard}
                    className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full border-b-4 border-yellow-600 hover:bg-yellow-300 hover:border-yellow-400 transition-all active:border-b-0 active:translate-y-1 shadow-lg"
                  >
                    Dashboard
                  </button>
                )}
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all shadow-md text-sm"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}

            {/* Indicadores decorativos */}
            <div className="hidden md:flex items-center gap-2 ml-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Línea decorativa inferior */}
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </header>
  );
};

export default Header;