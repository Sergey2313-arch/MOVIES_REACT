import './Movie.css';

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  const posterUrl =
    Poster && Poster !== 'N/A'
      ? Poster
      : 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <div className="card">
      <img src={posterUrl} alt={Title} title={imdbID} />

      <div className="card-content">
        <h3>{Title}</h3>
        <p>{Year} {Type}</p>
      </div>
    </div>
  );
}

export default Movie;
