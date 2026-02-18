// export interface IncidentContextType {
//     incidents: Incident[]; 
//     loading: boolean; // true mientras verificamos sesion al arrancar
//     fetchIncidents():Promise<void>
//     addIncident(incident:CreateIncidentDTO):Promise<void>
//     removeIncident(id:number):Promise<void>
// }

import { useState } from "react";
import type { CreateIncidentDTO, Incident } from "../types";
import { incidentsApi } from "../services/api";
import { useAuthContext } from "./useAuthContext";

export const useIncident = () => {
  const [incidents, setIncidents] = useState<Incident[] | undefined>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useAuthContext()

    async function fetchIncidents():Promise<void>{
        try {
            setLoading(true)
            const response = await incidentsApi.getIncidents()
            if(!response.ok){
                throw new Error('Error al obtener las incidencias')
            }
            setIncidents(response.data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    async function addIncident(incident:CreateIncidentDTO){
        try {
            setLoading(true)
        const response = await incidentsApi.createIncident( token ,incident);
        if(!response.ok){
            throw new Error('Error al crear la incidencia')
        }
        fetchIncidents()
        }catch{
            throw new Error('Error al crear una incidencia')
        }finally{
            setLoading(false)
        }
    }
    async function removeIncident(id:number):Promise<void>{
        try{
            setLoading(true)
            const response = await incidentsApi.deleteIncident(token,id)
            if(!response.ok) throw new Error ('Error al eliminar una incidencia')
            fetchIncidents()
        }catch{
            throw new Error ('Error al eliminar una incidencia')
        }finally{
            setLoading(false)
        }
    }



    return {
        incidents,
        loading, 
        fetchIncidents,
        addIncident,
        removeIncident
    };
};