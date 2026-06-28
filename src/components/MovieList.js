import Movie from './Movie';
import './MovieList.css';

function MovieList(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
