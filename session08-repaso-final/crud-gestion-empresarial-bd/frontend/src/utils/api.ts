//Compañias 
import type { Companies } from "../types/index.ts";

export const companiesAPI = {
    async getAll(): Promise<{ companies: Companies[], total: number }> {
        try {
            const response = await fetch('http://localhost:3001/api/companies');
            if(!response.ok) throw new Error('Error en el fetch para conseguir todas las compañias')
            const data = await response.json()
            return {
                companies: data.companies,
                total: data.length
            }
        } catch (error) {
            console.log('Error')
            return {
            companies: [], 
            total: 0
        };
        }
    },
    async createCompany(company:Omit<Companies, 'id'>){
        try {
            const response = await fetch('http://localhost:3001/api/companies',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(company)
            })

            if(!response.ok) throw new Error ('Error al crear la empresa');
            return await response.json()
        } catch (error) {
            console.error("Error en createCompany:", error);
            throw error;
        }
    }
    // async getById(id){},
    // async create(){},
    // async deleteById(),

}