import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import PokemonSearch from './pages/PokemonSearch'
import PokemonTypesSearch from './pages/PokemonTypesSearch'
import PokemonGamesSearch from './pages/PokemonGamesSearch'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { Toaster } from 'sonner'
import { ProtectedRouteAdmin } from './components/ProtectedRouteAdmin'
import DashBoard from './pages/Dashboard'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-orange-50'>
      <Toaster position='top-center' richColors />
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<PokemonSearch />} />
            <Route path='/types' element={<PokemonTypesSearch />} />
            <Route path='/games' element={<PokemonGamesSearch />} />
            <Route path='/dashboard' element={
              <ProtectedRouteAdmin>
                <DashBoard />
              </ProtectedRouteAdmin>
            }
            />
            <Route path='*' element={<NotFound />} />
            <Route path='/login' element={<LoginForm />} />

          </Routes>
        </main>
    </div>
  )
}

export default App

