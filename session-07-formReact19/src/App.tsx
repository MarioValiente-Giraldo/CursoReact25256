import { Navigate, Route, Routes } from 'react-router-dom'
import FormTodoList from './pages/formBasico/FormTodoList'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/form-todo' replace/>}/>
        <Route path='/form-todo' element={<FormTodoList />} />
      </Routes>
    </div>
  )
}

export default App
