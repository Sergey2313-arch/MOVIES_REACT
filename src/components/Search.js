import React from 'react';
import './Search.css';

class Search extends React.Component {
  state = {
    search: this.props.defaultValue || ''
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovie(this.state.search);
    }
  };

  render() {
    return (
      <div className="search">
        <input
          type="search"
          placeholder="Введите строку для поиска"
          value={this.state.search}
          onChange={(event) => this.setState({ search: event.target.value })}
          onKeyDown={this.handleKey}
        />

        <button
          className="btn"
          onClick={() => this.props.searchMovie(this.state.search)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
