import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import DashBoard from './components/DashBoard'
import { ProtectedRoute } from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import { useAuth } from './context/AuthContext'
import { Toaster } from 'sonner'

const App = () => {
  const { user } = useAuth()
  return (
    <div className='antialiased'>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path='/' element={!user ? <LoginForm /> : <Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App

