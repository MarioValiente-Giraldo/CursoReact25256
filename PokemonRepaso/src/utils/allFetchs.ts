import type { Pokemon } from "../types/pokemon";

// Cache para almacenar la lista de nombres y no saturar la API
let allPokemonNamesCache: { name: string; url: string }[] = [];

export async function fetchPokemons(query: string): Promise<Pokemon[]> {
  try {
    // 1. Descargamos la lista base (solo nombres y URLs) si no existe en cache
    if (allPokemonNamesCache.length === 0) {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
      const data = await res.json();
      allPokemonNamesCache = data.results;
    }

    // 2. Filtramos localmente los Pokémon que contienen las letras buscadas
    const filtered = allPokemonNamesCache
      .filter((p) => p.name.includes(query.toLowerCase()))
      .slice(0, 12); // Limitamos a 12 resultados para mantener un buen rendimiento

    // 3. Lanzamos todas las peticiones de detalles en paralelo con Promise.all
    const detailedPromises = filtered.map(async (p) => {
      const res = await fetch(p.url);
      if (!res.ok) return null;

      const data = await res.json();

      const imagenValida = 
        data.sprites.other["official-artwork"].front_default || 
        data.sprites.other.home.front_default || 
        data.sprites.front_default;

      return {
        id: data.id,
        nombre: data.name,
        tipos: data.types.map((t: any) => t.type.name),
        imagen: imagenValida
      };
    });

    // 4. Resolvemos todas las promesas y filtramos posibles nulos
    const results = await Promise.all(detailedPromises);
    return results.filter((p): p is Pokemon => p !== null);

  } catch (err) {
    console.error("Error al buscar los pokemons por letras:", err);
    return [];
  }
}