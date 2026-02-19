import { useAuthContext } from "../hooks/useAuthContext"
import { useBookContext } from "../hooks/useBookContext"
import type { Book } from "../types"

interface BookCardProps {
    book:Book
}
const BookCard = ({book}:BookCardProps) => {
    const{user}=useAuthContext()
    const{removeBook}=useBookContext()
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col border border-amber-100">
        {/* Contenedor de la imagen*/}
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`/images/libro-${book.id}.jpg`}
          alt={`Portada del libro ${book.title}`}
          onError={(e) => { e.currentTarget.src = '/images/no-cover.jpg' }}
        />
      </div>
        {/* Contenedor de los datos*/}
        <div className="p-4 flex flex-col gap-3 flex-1">
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold text-amber-900 leading-tight">{book.title}</h1>
                <h2 className="text-sm font-medium text-amber-700">{book.author}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{book.description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-amber-200">
                <span className="text-xs text-amber-600 capitalize bg-amber-100 px-2 py-1 rounded-full">{book.genre}</span>
                <span className="text-base font-bold text-amber-900">{book.price}€</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${book.status === "disponible" ? "bg-green-500" : book.status === "agotado" ? "bg-red-500" : "bg-gray-400"}`}>
                    {book.status ?? "sin estado"}
                </span>
            </div>
            {user && (
              <button
                onClick={() => removeBook(book.id)}
                className="mt-2 w-full py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-150"
              >
                Eliminar
              </button>
            )}
        </div>
    </div>
  )
}

export default BookCard
