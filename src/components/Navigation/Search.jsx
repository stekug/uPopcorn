export default function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Movies..."
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
}
