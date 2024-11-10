const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you already watched!</h2>
      <div>
        <p>
          <span>🎞️</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>💫</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{avgRuntime.toFixed(0)}</span>
        </p>
      </div>
    </div>
  );
}
