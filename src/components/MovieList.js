import React, { Component } from 'react';
import MoviePoster from './MoviePoster';
import { getMovies, getTopRated, getUpcoming, getNowPlaying, getCredits } from '../services/movieapi';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      gridView: this.props.gridView,
      listView: this.props.listView
    }
    console.log(this.state.gridView, this.state.listView)
  }

  selectMovie(id) {
    if(this.state.currentMovie === null) {
      this.setState({
        currentMovie: id,
        crew: this.state
      })
    } else {
      this.setState({ currentMovie: null})
    }
  }

  render() {
    // console.log(this.props.movies);
    console.log('GridView: ', this.props.gridView, 'ListView: ', this.props.listView);
    return (
      <div className='MovieList'>
        {this.props.movies.map(movie =>
          this.state.currentMovie === movie.id ?
          <div className='moviedetail' onClick={e => {
            return (
              this.selectMovie()
            )}}>
            <h2 id='movietitle'>{movie.title}</h2>
            <p id='releasedate'>{movie.release_date[0] + movie.release_date[1] + movie.release_date[2] + movie.release_date[3]}</p>
            <p id='overview'>{movie.overview}</p>
          </div> :
          this.props.gridView === true ?
          <MoviePoster
            key={movie.id}
            onClick={e => this.selectMovie(movie.id)}
            movie={movie}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            poster_path={movie.poster_path}
          /> :
          <div className='listinfo'>
            <div className='listpic'>
              <img id='movieimage' src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} />
            </div>
            <div className='listinfo2'>
              <h3 id='infotitle'>{movie.title}</h3>
              <p id='infooverview'>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MovieList;
