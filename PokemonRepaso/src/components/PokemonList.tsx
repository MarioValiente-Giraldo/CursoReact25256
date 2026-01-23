import React, { use } from 'react';
import type { Pokemon } from '../types/pokemon';
import PokemonCard from './PokemonCard';
import notFoundPokemon from '../assets/notFoundPokemon.gif'

interface PokemonListProps {
  pokemonPromise: Promise<Pokemon[]>;
}

const PokemonList = ({ pokemonPromise }: PokemonListProps) => {
  const pokemons = use(pokemonPromise);

  if (pokemons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        {/* GIF centrado */}
        <img 
          src={notFoundPokemon} 
          alt="Pokemon no encontrado"
          className="w-64 h-64 mb-6 drop-shadow-2xl"
        />
        
        {/* Textos */}
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          No se encontró ningún Pokémon
        </p>
        <p className="text-gray-500">
          Intenta buscar con otro nombre
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                      gap-6 auto-rows-fr">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;