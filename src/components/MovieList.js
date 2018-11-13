import React from 'react';
import Movies from './Movies';

export default function MovieList(props) {
  return (
    <div className='MovieList'>
      {props.movies.map(movie =>
        <Movies
          key={movie.id}
          movie={movie}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
          poster_path={movie.poster_path}
        />)}
    </div>
  )
}
