import { useRef } from 'react';
import { useKey } from '../useKey';

export default function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery('');
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search Movies..."
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      ref={inputElement}
    />
  );
}
