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
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{incident.title}</h2>
                <div className="card-badges">
                    <span className={`badge badge-${incident.priority}`}>{incident.priority}</span>
                    <span className={`badge badge-${incident.status}`}>{incident.status}</span>
                </div>
            </div>
            <p className="card-description">{incident.description}</p>
            <div className="card-footer">
                <span className="card-date">{new Date(incident.createdAt).toLocaleDateString()}</span>
                {!!user && (
                    <button className="btn btn-danger" onClick={() => removeIncident(incident.id)}>
                        Eliminar
                    </button>
                )}
            </div>
        </div>
    )
}
