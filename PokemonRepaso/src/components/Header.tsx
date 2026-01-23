import React from 'react';

/**
 * Componente Header temático de Pokémon
 * Muestra el logo, título y un diseño inspirado en la Pokédex
 */
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo y Título */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Pokébola decorativa */}
              <div className="w-16 h-16 bg-white rounded-full border-4 border-gray-900 flex items-center justify-center shadow-xl">
                <div className="w-14 h-14 rounded-full border-4 border-gray-900 bg-gradient-to-b from-red-500 to-white flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-full border-2 border-gray-900"></div>
                </div>  
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

          {/* Indicadores decorativos estilo Pokédex */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="ml-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <span className="text-white font-mono text-sm font-semibold">
                GEN I-IX
              </span>
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