'use client'

interface SearchProps {
  query: string
  setQuery: (query: string) => void
  handleSearch: () => void
}

const Search:React.FC<SearchProps> = ({query, setQuery, handleSearch}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Name or Title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
        id="search-input"
      />
      <button onClick={handleSearch} className="p-2 bg-black text-white rounded-md">
        Search
      </button>
    </>
  );
}

export default Search;
