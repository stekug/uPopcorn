export default function MovieDetails({ selectedId, onCloseMovie }) {
  console.log(onCloseMovie);
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        ⬅
      </button>
      {selectedId}
    </div>
  );
}
