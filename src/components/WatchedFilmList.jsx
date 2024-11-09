import WatchedMovie from './WatchedMovie';

export default function WatchedFilmList({ watched }) {
  return (
    <ul className="filmlist">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
