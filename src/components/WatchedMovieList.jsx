import WatchedMovie from './WatchedMovie';

export default function WatchedMovieList({ watched }) {
  return (
    <ul className="filmlist">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
