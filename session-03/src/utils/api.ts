import { API_CONFIG, type Plato } from "../types";
// export interface Plato {
//     id: number;
//     nombre: string;
//     categoria: string;
//     origen: string;
//     calorias: number;
//     ingredientes: string[];
//     imagen: string;
// }

export const fecthPlatos = async(): Promise<Plato[]> =>{
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Error al cargar los platos')
        const data = await response.json()
        return data
    }catch (error) {
        console.log(error)    
        throw error
    }
}