import { IncidentCard } from "../components/IncidentCard"
import { useIncidentContext } from "../hooks/useIncidentContext"

export const IncidentsPages = () => {
    const { incidents } = useIncidentContext()

    return (
        <div>
            {incidents?.map((incident) => (
                <IncidentCard incident={incident} key={incident.id} />
            ))}
        </div>
    )
}