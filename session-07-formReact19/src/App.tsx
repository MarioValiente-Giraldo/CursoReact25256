import { Navigate, Route, Routes } from 'react-router-dom'
import FormTodoList from './pages/formBasico/FormTodoList'
import FormLogin from './pages/formLogin/FormLogin'
import FormRegister from './pages/formRegister/FormRegister'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/form-todo' replace/>}/>
        <Route path='/form-todo' element={<FormTodoList />} />
        <Route path='/form-login' element={<FormLogin />} />
        <Route path='/form-register' element={<FormRegister />}/>
      </Routes>
    </div>
  )
}

export default App
