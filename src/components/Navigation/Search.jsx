import { useEffect, useRef } from 'react';

export default function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(
    function () {
      function callback(event) {
        if (document.activeElement === inputElement.current) return;

        if (event.code === 'Enter') {
          inputElement.current.focus();
          setQuery('');
        }
      }

      document.addEventListener('keydown', callback);
      return () => document.addEventListener('keydown', callback);
    },
    [setQuery]
  );

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
