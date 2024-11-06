import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
    <ul className="filmlist">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
