import { useState } from 'react';
import WatchedSummary from './WatchedSummary';
import WatchedFilmList from './WatchedFilmList';

export default function WatchedBox() {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((curr) => !curr)}
      >
        {isOpen2 ? '-' : '+'}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedFilmList watched={watched} />
        </>
      )}
    </div>
  );
}
