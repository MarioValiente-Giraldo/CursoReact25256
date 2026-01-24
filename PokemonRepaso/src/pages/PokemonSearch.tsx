import React, { Suspense, useEffect, useState } from 'react';
import { fetchPokemons } from '../utils/allFetchs';
import type { Pokemon } from '../types/pokemon';
import Search from '../components/Search';
import PokemonList from '../components/PokemonList';
import LoadingFallBack from '../components/LoadingFallBack';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const PokemonSearch = () => {
  const [pokemonsPromise, setPokemonsPromise] = useState<Promise<Pokemon[]> | null>(null);
  const [query, setQuery] = useState('');
  const {user} = useAuth()

  useEffect(() => {
    if(!user){
      <Navigate to='/login' />
    }
    if (query.trim() === '') {
      setPokemonsPromise(null);
      return;
    }

    // Debounce de 500ms para evitar peticiones excesivas
    const timeout = setTimeout(() => {
      const promise = fetchPokemons(query);
      setPokemonsPromise(promise);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="min-h-screen">
      <Search placeholder="Captura tus pokémon..." onSearchChange={setQuery} />
      
      {/* Contenedor de resultados */}
      <div className="container mx-auto px-4">
        {pokemonsPromise ? (
          <Suspense fallback={<LoadingFallBack message="Buscando en la hierba alta... 🌿" />}>
            <PokemonList pokemonPromise={pokemonsPromise} />
          </Suspense>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-bounce">🔍</div>
            <h2 className="text-3xl font-bold text-gray-700 mb-3">
              ¡Busca tu Pokémon favorito!
            </h2>
            <p className="text-gray-500 text-lg">
              Escribe el nombre en el buscador para comenzar
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonSearch;