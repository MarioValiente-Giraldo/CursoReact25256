const API_URL = import.meta.env.VITE_API_URL
export async function fetchPeliculas() {
    try {
        const response = await fetch(`${API_URL}/api/movies`)   
        if(!response.ok){
            throw new Error('Ha ocurrido un error al obtener las películas')
        }
    } catch (error) {
            throw error
    }
}

