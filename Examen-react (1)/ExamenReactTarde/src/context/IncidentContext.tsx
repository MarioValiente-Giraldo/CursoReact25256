import { createContext, type ReactNode } from "react";
import type { CreateIncidentDTO, Incident } from "../types";
import { useIncident } from "../hooks/useIncident";

export interface IncidentContextType {
    incidents: Incident[] | undefined; 
    loading: boolean; // true mientras verificamos sesion al arrancar
    fetchIncidents():Promise<void>
    addIncident(incident:CreateIncidentDTO):Promise<void>
    removeIncident(id:number):Promise<void>
}

export const IncidentContext = createContext<IncidentContextType | undefined>(undefined);

export const IncidentProvider = ({children}:{children:ReactNode})=>{
    const use = useIncident()
    return <IncidentContext value={use}>{children}</IncidentContext>
}
