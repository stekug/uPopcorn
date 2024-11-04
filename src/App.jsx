import { useState } from 'react';
import NavigationBar from './components/NavigationBar';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState('');
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleIsOpen1Change = () => {
    setIsOpen1((curr) => !curr);
  };
  const handleIsOpen2Change = () => {
    setIsOpen2((curr) => !curr);
  };

  return (
    <>
      <NavigationBar
        movies={movies}
        query={query}
        onQueryChange={handleQueryChange}
      />
      <main className="main">
        <FilmList isOpen1={isOpen1} onIsOpen1Change={handleIsOpen1Change} />
        <Watched
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
          onIsOpen2Change={handleIsOpen2Change}
          isOpen2={isOpen2}
        />
      </main>
    </>
  );
}

function FilmList({ isOpen1, onIsOpen1Change }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onIsOpen1Change}>
        {isOpen1 ? '-' : '+'}
      </button>
      {isOpen1 && (
        <ul className="filmlist">
          {tempMovieData.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>📅</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Watched({
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  onIsOpen2Change,
  isOpen2,
}) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onIsOpen2Change}>
        {isOpen2 ? '-' : '+'}
      </button>
      {isOpen2 && (
        <>
          <div className="summary">
            <h2>Movies you already watched!</h2>
            <div>
              <p>
                <span>🎞️</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>💫</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⌛</span>
                <span>{avgRuntime}</span>
              </p>
            </div>
          </div>

          <ul className="filmlist">
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>💫</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⌛</span>
                    <span>{movie.runtime}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
