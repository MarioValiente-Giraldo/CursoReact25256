import { Route, Routes } from "react-router-dom"
import BooksPage from "./pages/BooksPage"
import NavBar from "./components/NavBar"
import { Suspense } from "react"
import BookCreateForm from "./components/BookCreateForm"
import LoadingSpinner from "./components/LoadingSpinner"
import LoginFormPage from "./pages/LoginFormPage"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<BooksPage />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/crear"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <BookCreateForm />
                  </Suspense>
                }
              />
            </Route>
            <Route path="/login" element={<LoginFormPage />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
