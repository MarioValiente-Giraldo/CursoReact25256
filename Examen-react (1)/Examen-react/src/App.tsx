import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { IncidentsPages } from "./pages/IncidentsPages"
import { Layout } from "./components/Layout"
import LoginForm from "./pages/LoginForm"
import NewIncidentPage from "./pages/NewIncidentPage"
import { ProtectedRoute } from "./components/ProtectedRoute"

export const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/incidents" element={<IncidentsPages />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
          path="/createIncident"
          element={
            <ProtectedRoute>
              <NewIncidentPage />
            </ProtectedRoute>
          }
        />
        </Route>
      </Routes>
    </div>
  )
}
