interface SearchBarProps {
    query: string
    onSearch: (q: string) => void
}

const SearchBar = ({ query, onSearch }: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
    </div>
  )
}

export default SearchBar
