import { useEffect, useState } from "react"
import { useBookContext } from "../hooks/useBookContext"
import BookCard from "../components/BookCard"
import SearchBar from "../components/SearchBar"

const BooksPage = () => {
    const { books, fetchBooks } = useBookContext()
    const [query, setQuery] = useState('')

    useEffect(()=>{
        fetchBooks()
    },[])

    const filteredBooks = books?.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div className="min-h-screen bg-amber-50 px-6 py-10">
      <SearchBar query={query} onSearch={setQuery} />
      <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center tracking-wide">Biblioteca</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredBooks?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BooksPage
