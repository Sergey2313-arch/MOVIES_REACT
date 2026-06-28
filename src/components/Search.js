import React from 'react';
import './Search.css';

class Search extends React.Component {
  state = {
    search: this.props.defaultValue || ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps.defaultValue !== this.props.defaultValue) {
      this.setState({ search: this.props.defaultValue || '' });
    }
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovie(this.state.search);
    }
  };

  render() {
    const { placeholder = 'Введите строку для поиска', buttonText = 'Search' } = this.props;

    return (
      <div className="search">
        <input
          type="search"
          placeholder={placeholder}
          value={this.state.search}
          onChange={(event) => this.setState({ search: event.target.value })}
          onKeyDown={this.handleKey}
        />

        <button
          className="btn"
          onClick={() => this.props.searchMovie(this.state.search)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Search;
