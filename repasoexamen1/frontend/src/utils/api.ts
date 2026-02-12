import type { Company, User } from "../types";

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

//-------------------------------------
//Usuarios
// //-------------------------------------
export const UsersApi = {
    async loginUser(user:User):Promise<{message:string,success:boolean}>{
        try{
            const response = await fetch(`${API_URL}/auth/login`,{
                method: 'POST',
                headers: getHeaders(),
                body:JSON.stringify(user)
            })
            if(!response)  throw new Error("Error al obtener información del usuario");
            const data = await response.json()
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            return {
                    message:`Se ha identificado correctamente al usuario ${user.name}`,
                    success:true
                } 
        }catch{
            return {
                    message:`Error al identificar al usuario ${user.name}`,
                    success:false
                } 
        }
    }
}

//-------------------------------------
//Compañías
//-------------------------------------

export const CompaniesApi = {
   async registerComany(company:Company):Promise<{message:string,success:boolean}>{
        try{
            const response = await fetch(`${API_URL}/companies`,{
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
           return {
                message: 'Error de conexión con el servidor',
                success: false
            };
        }
    }
}