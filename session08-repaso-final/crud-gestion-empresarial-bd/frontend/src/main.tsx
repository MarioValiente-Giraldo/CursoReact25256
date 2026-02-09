import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import AppRegisterCompany from './Apps/AppRegisterCompany.tsx'
import { BrowserRouter } from 'react-router-dom'
const App = AppRegisterCompany 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-center" richColors  />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
  