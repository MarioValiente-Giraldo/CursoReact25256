export interface Plato {
    id: number;
    nombre: string;
    categoria: string;
    origen: string;
    calorias: number;
    ingredientes: string[];
    imagen: string;
}

export const API_CONFIG = {
    BASE_URL :`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_PORT}`,
    ENDPOINTS : {
        PLATOS:'/api/platos',
        STATS:'/stats'
    }


}