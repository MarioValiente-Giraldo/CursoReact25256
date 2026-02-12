import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterCompanyForm from './components/RegisterCompanyForm'
import LoginAdminForm from './components/LoginAdminForm'

function App() {

  return (
    <>
      <RegisterCompanyForm />
      <LoginAdminForm />
    </>
  )
}

export default App
