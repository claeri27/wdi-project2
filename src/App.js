import React, { Component } from 'react';
import './App.css';
import { getMovies, getPopular, getUpcoming, getNowPlaying } from './services/movieapi';
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
    this.getPopular = this.getPopular.bind(this);
    this.getUpcoming = this.getUpcoming.bind(this);
    this.getNowPlaying = this.getNowPlaying.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  async getMovies(e) {
    if (this.state.input) {
      e.preventDefault();
      const resp = await getMovies(this.state.input);
      this.setState({ movies: resp.data.results });
      console.log(this.state.movies);
    }
  }

  async getPopular() {
    const resp = await getPopular();
    this.setState({ movies: resp.data.results });
    console.log(this.state.movies);
  }

  async getUpcoming() {
    const resp = await getUpcoming();
    this.setState({ movies: resp.data.results });
    console.log(this.state.movies);
  }

  async getNowPlaying() {
    const resp = await getNowPlaying();
    this.setState({ movies: resp.data.results });
    console.log(this.state.movies);
  }

  render() {
    return (
      <div className="App">
        <h1>movie grabber</h1>
        <nav className='nav'>
          <button onClick={this.getPopular}>Popular</button>
          <button onClick={this.getUpcoming}>Upcoming</button>
          <button onClick={this.getNowPlaying}>Now Playing</button>
          <MovieForm
            input={this.state.input}
            onChange={this.handleChange}
            onSubmit={this.getMovies}
          />
        </nav>
        {this.state.movies ? <MovieList movies={this.state.movies}/> : null}
      </div>
    );
  }
}

export default App;
