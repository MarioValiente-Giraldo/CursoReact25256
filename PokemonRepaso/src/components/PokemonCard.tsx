import React from 'react';
import type { Pokemon } from '../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  // Colores para cada tipo de Pokémon
  const typeColors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-cyan-400',
    fighting: 'bg-orange-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                    transform hover:-translate-y-2 p-6 border-4 border-gray-100 
                    hover:border-red-300 group">
      {/* Imagen del Pokémon */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 mb-4 
                      group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300">
        <img 
          src={pokemon.imagen} 
          alt={pokemon.nombre} 
          className="w-full h-40 object-contain drop-shadow-lg 
                     group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Nombre del Pokémon */}
      <h3 className="text-2xl font-bold text-gray-800 capitalize text-center mb-3 
                     group-hover:text-red-600 transition-colors">
        {pokemon.nombre}
      </h3>

      {/* Tipos */}
      <div className="flex gap-2 justify-center flex-wrap">
        {pokemon.tipos.map((tipo) => (
          <span 
            key={tipo} 
            className={`${typeColors[tipo.toLowerCase()] || 'bg-gray-400'} 
                       text-white px-4 py-1.5 rounded-full text-sm font-semibold 
                       uppercase shadow-md hover:scale-110 transition-transform`}
          >
            {tipo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;