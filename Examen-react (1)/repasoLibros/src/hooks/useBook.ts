import { useState } from "react"
import type { Book, CreateBookDTO } from "../types"
import { booksApi } from "../services/api"

export const useBook = () =>{
    const [books, setBooks] = useState<Book [] | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
    const [contadorCarrito, setContadorCarrito] = useState<number>(0)
    const fetchBooks = async ():Promise<void>=>{
        try {
            setLoading(true)
            const response = await booksApi.getBooks()
            if(!response.ok) throw new Error ('Error al conseguir los libros')
            setBooks(response.data)
        } catch (error) {
            throw error
        }finally{
            setLoading(false)
        }
    }

    
    const addBook = async (book: CreateBookDTO): Promise<void> => {
    try {
        setLoading(true)
        const response = await booksApi.createBook(book);
        if (!response.ok) throw new Error('Error al crear un libro')
        fetchBooks()
    } catch (error) {
        throw error
    } finally {

    }
}

    const removeBook = async (id:number):Promise<void>=>{
        try {
        setLoading(true)
          const response = await booksApi.deleteBook(id)
          if(!response.ok) throw new Error('Error al eliminar un libro')
            fetchBooks()
        } catch (error) {
            throw error
        }finally{
            setLoading(false)
        }
    }
    const añadirCarrito = () =>{
            setContadorCarrito(contadorCarrito+1)
    }

    return{
        books,
        contadorCarrito,
        loading,
        añadirCarrito,
        fetchBooks,
        addBook,
        removeBook
    }
}