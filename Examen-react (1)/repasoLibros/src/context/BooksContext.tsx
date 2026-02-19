import { createContext, type ReactNode } from "react";
import type { Book, CreateBookDTO } from "../types";
import { useBook } from "../hooks/useBook";

export interface BooksContextType {
    books:Book []| undefined;
    loading:boolean;
    contadorCarrito:number
    añadirCarrito():void
    fetchBooks():Promise<void>
    addBook(book:CreateBookDTO):Promise<void>
    removeBook(id:number):Promise<void>
}


export const BooksContext = createContext<BooksContextType | undefined>(undefined)

export const BooksProvider = ({children}:{children:ReactNode})=>{
    const use = useBook()
    return <BooksContext value={use}>{children}</BooksContext>
}