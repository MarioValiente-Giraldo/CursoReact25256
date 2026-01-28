import  { use } from 'react';
import type { Pokemon } from '../types/pokemon';
import PokemonCard from './PokemonCard';
import notFoundPokemon from '../assets/notFoundPokemon.gif'
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext'; // ✅ Importar

interface PokemonListProps {
  pokemonPromise: Promise<Pokemon[]>;
}

const PokemonList = ({ pokemonPromise }: PokemonListProps) => {
  const pokemons = use(pokemonPromise);
  const { theme } = useTheme()
  const { texts } = useLanguage() // ✅ Obtener textos
  const isDark = theme === 'dark'

  if (pokemons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <img 
          src={notFoundPokemon} 
          alt="Pokemon no encontrado"
          className="w-64 h-64 mb-6 drop-shadow-2xl"
        />
        
        <p className={`text-2xl font-semibold mb-2 ${
          isDark ? 'text-gray-200' : 'text-gray-700'
        }`}>
          {texts.pokemonList.no_pokemon_found} {/* ✅ Traducción */}
        </p>
        <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
          {texts.pokemonList.try_another_search} {/* ✅ Traducción */}
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