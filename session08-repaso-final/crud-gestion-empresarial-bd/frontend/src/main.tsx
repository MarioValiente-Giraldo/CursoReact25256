import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppBasicoReact19 from './Apps/AppBasicoReact19.tsx'
import { Toaster } from 'sonner'
import CompaniesForm from './components/companies/CompaniesForm.tsx'
const App = CompaniesForm 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="top-center" richColors  />
    <App />
  </StrictMode>,
)
  