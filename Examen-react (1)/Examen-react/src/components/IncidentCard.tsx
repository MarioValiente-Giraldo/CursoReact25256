import { useAuthContext } from "../hooks/useAuthContext"
import { useIncidentContext } from "../hooks/useIncidentContext"
import type { Incident } from "../types"
import '../index.css';

interface IncidentCardProps {
    incident:Incident
}
export const IncidentCard = ({incident}:IncidentCardProps) => {
    const {removeIncident}=useIncidentContext()
    const {user} =useAuthContext()
    return (
        <div className=" card card:hover">
            <div className="card-header">
                <h1 className="card-title">{incident.title}</h1>
                <span className={`badge ${
                    incident.priority === 'alta' ? 'badge-alta' :
                    incident.priority === 'media' ? 'badge-media' :
                    'badge-baja'
                }`}>
                    {incident.priority}
                </span>        
            </div>
            <div>
                <p>{incident.description}</p>
                <p>{incident.status}</p>
            </div>
            {!!user && <button onClick={()=>removeIncident(incident.id)}>Elimina</button>}

            
        </div>
    )
}
    