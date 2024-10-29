export default function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>uPopcorn</h1>
      </div>
      <input className="search" type="text" placeholder="Search Movies..." />
      <p className="num-results">Found XXX results</p>
    </nav>
  );
}
