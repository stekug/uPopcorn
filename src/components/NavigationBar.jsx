export default function NavigationBar({ movies, query, onQueryChange }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>uPopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search Movies..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <p className="num-results">Found {movies.length} results</p>
    </nav>
  );
}
