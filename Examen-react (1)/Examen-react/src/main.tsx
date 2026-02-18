import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { AuthProvider } from './context/AuthContext.tsx'
import { IncidentProvider } from './context/IncidentContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <IncidentProvider>
          <App />
        </IncidentProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
