import { useState } from 'react';

export default function Search() {
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
