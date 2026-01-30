import { Route, Routes } from 'react-router-dom'
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
import { useTheme } from './context/ThemeContext'

const App = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen transition-colors ${
      isDark 
        ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-linear-to-br from-gray-50 via-red-50 to-orange-50'
    }`}>
      <Toaster position='top-center' richColors theme={theme} />
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