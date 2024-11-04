import { useState } from 'react';

export default function NavigationBar({ movies }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>uPopcorn</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState('');
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

function NumResults({ movies }) {
  return <p className="num-results">Found {movies.length} results</p>;
}
