import { useEffect } from "react"
import { IncidentCard } from "../components/IncidentCard"
import { useIncidentContext } from "../hooks/useIncidentContext"

export const IncidentsPages = () => {
    const { incidents, fetchIncidents } = useIncidentContext()

    useEffect(() => {
        fetchIncidents()
    }, [])

    return (
        <div className="page">
            <h1 className="page-title">Incidencias</h1>
            {incidents && incidents.length === 0 && (
                <div className="empty-state">No hay incidencias registradas.</div>
            )}
            <div className="incidents-grid">
                {incidents?.map((incident) => (
                    <IncidentCard incident={incident} key={incident.id} />
                ))}
            </div>
        </div>
    )
}
