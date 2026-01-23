import React from 'react';

interface SearchProps{
  // Función callback que se ejecuta cuando el usuario escribe en el campo de búsqueda
  onSearchChange:(value:string) => void;
}
/**
 * Componente de búsqueda que permite filtrar platos por nombre o ingredientes.
 * @param onSearchChange - Callback que recibe el valor del input cada vez que cambia
 */
const Search = ({ onSearchChange }:SearchProps) => {
  
  return (
    <div className="w-full max-w-xl mx-auto p-4"> 
      <form className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Busque su plato o ingredientes..." 
          className="w-full px-5 py-3 pl-12 bg-gray-100 border border-transparent rounded-2xl 
                    text-gray-700 placeholder-gray-400
                      transition-all duration-300
                    focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none"
          // Llama a onSearchChange cada vez que el usuario escribe
          onChange={(e)=>onSearchChange(e.target.value)}
        />
        <span className="absolute left-4 text-xl grayscale opacity-70">
          🔎
        </span>
      </form>
    </div>
  );
};
  
export default Search;