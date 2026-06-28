import React from 'react';
import Preloader from '../components/Preloader';
import MovieList from '../components/MovieList';
import MusicList from '../components/MusicList';
import Search from '../components/Search';
import './Main.css';

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY || 'd8f9e9fb';
const AUDIO_DB_API_KEY = '2';

class Main extends React.Component {
  state = {
    mode: 'movies',
    movies: [],
    artists: [],
    loading: true,
    error: '',
    movieSearchText: 'Heat',
    musicSearchText: 'Coldplay'
  };

  componentDidMount() {
    this.searchMovies(this.state.movieSearchText);
  }

  setMode = (mode) => {
    this.setState({ mode, error: '' }, () => {
      if (mode === 'movies' && this.state.movies.length === 0) {
        this.searchMovies(this.state.movieSearchText);
      }

      if (mode === 'music' && this.state.artists.length === 0) {
        this.searchMusic(this.state.musicSearchText);
      }
    });
  };

  searchMovies = (str) => {
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
      movieSearchText: searchText
    });

    fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(searchText)}`)
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

  searchMusic = (str) => {
    const searchText = str.trim();

    if (!searchText) {
      this.setState({
        artists: [],
        loading: false,
        error: 'Введите имя исполнителя'
      });
      return;
    }

    this.setState({
      loading: true,
      error: '',
      musicSearchText: searchText
    });

    fetch(`https://www.theaudiodb.com/api/v1/json/${AUDIO_DB_API_KEY}/search.php?s=${encodeURIComponent(searchText)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.artists && data.artists.length > 0) {
          this.setState({
            artists: data.artists,
            loading: false,
            error: ''
          });
        } else {
          this.setState({
            artists: [],
            loading: false,
            error: 'Исполнитель не найден'
          });
        }
      })
      .catch(() => {
        this.setState({
          artists: [],
          loading: false,
          error: 'Ошибка загрузки данных'
        });
      });
  };

  renderContent() {
    const { mode, movies, artists, loading, error } = this.state;

    if (loading) {
      return <Preloader />;
    }

    if (error) {
      return <h2 className="error">{error}</h2>;
    }

    if (mode === 'movies') {
      return <MovieList movies={movies} />;
    }

    return <MusicList artists={artists} />;
  }

  render() {
    const { mode, movieSearchText, musicSearchText } = this.state;
    const isMovies = mode === 'movies';

    return (
      <main className="main">
        <div className="wrap">
          <div className="tabs">
            <button
              className={isMovies ? 'tab active' : 'tab'}
              onClick={() => this.setMode('movies')}
            >
              Movies
            </button>

            <button
              className={!isMovies ? 'tab active' : 'tab'}
              onClick={() => this.setMode('music')}
            >
              Music
            </button>
          </div>

          <Search
            searchMovie={isMovies ? this.searchMovies : this.searchMusic}
            defaultValue={isMovies ? movieSearchText : musicSearchText}
            placeholder={isMovies ? 'Введите название фильма' : 'Введите имя исполнителя'}
            buttonText={isMovies ? 'Search movie' : 'Search artist'}
          />

          {this.renderContent()}
        </div>
      </main>
    );
  }
}

export default Main;
