import React, { Component } from 'react';
import MoviePoster from './MoviePoster';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null
    }
  }

  selectMovie(id) {
    if(this.state.currentMovie === null) {
      this.setState({ currentMovie: id})
    } else {
      this.setState({ currentMovie: null})
    }
  }

  render() {
    console.log(this.props.movies);
    return (
      <div className='MovieList'>
        {this.props.movies.map(movie =>
          this.state.currentMovie === movie.id ?
          <div className='moviedetail' onClick={e => this.selectMovie()}>
            <h2 id='movietitle'>{movie.title}</h2>
            <p id='releasedate'>Released: {movie.release_date}</p>
            <p id='overview'>{movie.overview}</p>
          </div> :
          <MoviePoster
            key={movie.id}
            onClick={e => this.selectMovie(movie.id)}
            movie={movie}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
        )}
      </div>
    )
  }
}

export default MovieList;
