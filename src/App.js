import React, { Component } from 'react';
import './App.css';
import { getMovies, getTopRated, getUpcoming, getNowPlaying, getCredits } from './services/movieapi';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Filler from './components/Filler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      input: '',
      cast: '',
      crew: '',
      gridView: true,
      listView: false,
    }
    this.getMovies = this.getMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTopRated = this.getTopRated.bind(this);
    this.getUpcoming = this.getUpcoming.bind(this);
    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.getCredits = this.getCredits.bind(this);
    this.changeGrid = this.changeGrid.bind(this);
    this.changeList = this.changeList.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
    if(this.state.input.length>2) this.getMovies();
  }

  async getMovies(e) {
    if (this.state.input) {
      const resp = await getMovies(this.state.input);
      this.setState({ movies: resp.data.results });
    }
  }

  async getTopRated() {
    const resp = await getTopRated();
    this.setState({ movies: resp.data.results });
  }

  async getUpcoming() {
    const resp = await getUpcoming();
    this.setState({ movies: resp.data.results });
  }

  async getNowPlaying() {
    const resp = await getNowPlaying();
    this.setState({ movies: resp.data.results });
  }

  async getCredits() {
    let cast = [];
    let crew = [];
      for(let i = 0;i<this.state.movies.length;i++) {
        let thing = await getCredits(this.state.movies[i].id);
        // console.log(thing);
        cast.push(thing.data.cast);
        crew.push(thing.data.crew);
      }
      console.log(cast, crew);
      this.setState({
        cast: cast,
        crew: crew
      });
  }

  changeGrid() {
    if(this.state.gridView === false) {
      this.setState({
        gridView: true,
        listView: false
      })
    }
  }

  changeList() {
    if(this.state.listView === false) {
      this.setState({
        listView: true,
        gridView: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <h1>movie grabber</h1>
          <div className='button' onClick={this.getNowPlaying}>NOW PLAYING</div>
          <div className='button' onClick={this.getUpcoming}>UPCOMING</div>
          <div id='toprated'  className='button' onClick={this.getTopRated}>TOP RATED</div>
          <button className="fas fa-th-large" id='gridview' onClick={this.changeGrid}></button>
          <button className="fas fa-list" id='listview' onClick={this.changeList}></button>
          <MovieForm
            input={this.state.input}
            onChange={this.handleChange}
            onClick={this.getMovies}
          />
          <button
            className="fas fa-cog"
            id='settings'>
          </button>
        </nav>
        {this.state.movies ?
          <MovieList
            movies={this.state.movies}
            gridView={this.state.gridView}
            listView={this.state.listView}/> :
          <Filler
        />}
      </div>
    );
  }
}

export default App;
