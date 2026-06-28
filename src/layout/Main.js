import React from 'react';
import Preloader from '../components/Preloader';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import './Main.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY || 'd8f9e9fb';

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
    error: '',
    searchText: 'Heat'
  };

  componentDidMount() {
    this.searchMovie(this.state.searchText);
  }

  searchMovie = (str) => {
    const searchText = str.trim();

    if (!searchText) {
      this.setState({
        movies: [],
        loading: false,
        error: 'Введите название фильма'
      });
      return;
    }

    this.setState({
      loading: true,
      error: '',
      searchText
    });

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          this.setState({
            movies: data.Search,
            loading: false,
            error: ''
          });
        } else {
          this.setState({
            movies: [],
            loading: false,
            error: data.Error || 'Фильмы не найдены'
          });
        }
      })
      .catch(() => {
        this.setState({
          movies: [],
          loading: false,
          error: 'Ошибка загрузки данных'
        });
      });
  };

  render() {
    const { movies, loading, error, searchText } = this.state;

    return (
      <main className="main">
        <div className="wrap">
          <Search searchMovie={this.searchMovie} defaultValue={searchText} />

          {loading && <Preloader />}

          {error && !loading && <h2 className="error">{error}</h2>}

          {!loading && !error && <MovieList movies={movies} />}
        </div>
      </main>
    );
  }
}

export default Main;
