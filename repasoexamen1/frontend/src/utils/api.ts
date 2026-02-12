import type { Company } from "../types";

const API_URL = (import.meta as any).env.VITE_API_URL;
const getHeaders = () =>{
    const headers:HeadersInit ={
        "Content-Type":"application/json"
    }
    const token = localStorage.getItem('token');    
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return headers;

}
export const CompaniesApi = {
   async registerComany(company:Company):Promise<{message:string,success:boolean}>{
        try{
            const response = await fetch(`${API_URL}`,{
                method: 'POST',
                headers: getHeaders(),
                body:JSON.stringify(company)
            })
            if(!response.ok)throw new Error('Error al intentar insertar una compañía en la BD')
            
            return {
                message:`Se ha creado correctamente la empresa ${company.name}`,
                success:true
            }
        }catch(error){
            throw new Error('Error a la hora de insertar una compañía')
        }
    }
}