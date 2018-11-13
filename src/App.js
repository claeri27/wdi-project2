import React, { Component } from 'react';
import './App.css';
import getMovies from './services/movieapi';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      input: ''
    }
    this.getMovies = this.getMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.getMovies();
  // }

  // async handleClick() {
  //
  // }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  async getMovies() {
    const resp = await getMovies();
    this.setState({ movies: resp });
  }

  render() {
    return (
      <div className="App">
        <MovieForm
          input={this.state.input}
          onChange={this.handleChange}
          onSubmit={this.getMovies}
        />
        {this.state.movies ? <MovieList className='MovieList' movies={this.state.movies}/> : null}
      </div>
    );
  }
}

export default App;
