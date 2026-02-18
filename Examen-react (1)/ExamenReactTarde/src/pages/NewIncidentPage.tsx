import { useActionState } from "react"
import { useIncidentContext } from "../hooks/useIncidentContext"
import type { CreateIncidentDTO } from "../types"
import { useNavigate } from "react-router-dom"

const NewIncidentPage = () => {
  const {addIncident}= useIncidentContext()
  const navigate = useNavigate()

  const formAction = async (_:{error:string|null},formData:FormData)=>{
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const priority = formData.get('priority') as CreateIncidentDTO ['priority']
    if(!title || !description ||!priority){
        return {error:'Es necesario rellenar todos los campos'}
    }
    const incident:CreateIncidentDTO={
      title,
      description,
      priority
    }
    await addIncident(incident)
    navigate('/incidents')
    return { error: null };
  }

  const [state,submitAction,isPending] = useActionState(formAction,{
    error:null
  })

  return (
    <div className="page">
      <h1 className="page-title">Nueva incidencia</h1>
      <form action={submitAction} className="form">
        {state.error && (
          <div className="alert-error">{state.error}</div>
        )}
        <div className="form-group">
          <label className="form-label">Título de la incidencia</label>
          <input
            name="title"
            disabled={isPending}
            placeholder="Escriba el título de la incidencia"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Descripción de la incidencia</label>
          <textarea
            name="description"
            disabled={isPending}
            placeholder="Escriba la descripción de la incidencia"
            className="form-textarea"
            rows={4}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Prioridad de la incidencia</label>
          <select
            name="priority"
            disabled={isPending}
            className="form-select"
          >
            <option value="">Seleccione una prioridad</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? 'Creando...' : 'Crear incidencia'}
        </button>
      </form>
    </div>
  )
}

export default NewIncidentPage
