import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"

export const useBookContext = () =>{
    const context = useContext(BooksContext)
    if(!context) throw new Error('Error al usar el contexto de Book')
    return context
}